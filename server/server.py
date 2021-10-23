from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from markupsafe import escape
import scrapers.digi24 as digi
import scrapers.g4media as g4
import scrapers.apnews as ap

"""
The server

Keep a dictionary with references to the imports, 
so the routes are as general as possible
"""
news = {
    "digi24": digi,
    "g4media": g4,
    "apnews": ap,
}

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/<news_source>", methods=["GET"])
def get_news(news_source):
    try:
        website = escape(news_source)
        articles = news[website].get_articles()
        return jsonify(articles)
    except Exception as e:
        print(e)
        return jsonify({
            "message": "An error has occurred"
        })


@app.route("/<news_source>/<category>", methods=["GET"])
def get_news_by_category(news_source, category):
    try:
        website = escape(news_source)
        category = escape(category)
        articles = news[website].get_by_category(category)
        return jsonify(articles)
    except Exception as e:
        print(e)
        return jsonify({
            "message": "An error has occurred"
        })


@app.route("/<news_source>/article", methods=["POST"])
def get_article(news_source):
    try:
        website = escape(news_source)
        url = escape(request.get_json()["articleUrl"])
        article = news[website].get_article(url)
        return jsonify(article)
    except Exception as e:
        print(e)
        return jsonify({
            "message": "An error has occurred"
        })


@app.route("/")
def hello_world():
    sources = list(news.keys())
    return jsonify(sources)
