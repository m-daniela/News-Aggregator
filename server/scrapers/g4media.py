from . import utils


def get_articles():
    """
    Scrape the articles from the main page
    The article object contains the title, link
    intro paragraph and the publication date
    :return: articles: list of article objects
    """
    url = "https://www.g4media.ro/articole"

    soup = utils.prepare_soup(url)
    articles_html = soup.find_all("article")

    articles = []

    for article in articles_html:
        try:
            header = article.find(class_="post-title")
            title = header.text.strip()
            link = header.find("a")["href"]
            intro = article.find(class_="post-summary").text.strip()
            date = article.find(class_="post-date").text.strip()

            article_obj = {
                "title": title,
                "link": link,
                "intro": intro,
                "date": date
            }
            articles.append(article_obj)

        except Exception as e:
            print(e)

    return articles


def get_by_category(category):
    pass


def get_article(url):
    """
    Get the title, text and publication date of the article
    :param url: the url to the article
    :return: article object
    """
    soup = utils.prepare_soup(url)

    try:
        title = soup.find(class_="post-title").text.strip()
        date = soup.find(class_="post-date").text.strip()
        article = soup.find(class_="post-content")
        paragraphs = article.find_all("p")
        article_text = utils.combine_paragraphs(paragraphs)
        article_obj = {
            "title": title,
            "article": article_text,
            "date": date
        }
    except Exception as e:
        print(e)
        article_obj = {
            "title": None,
            "article": None,
            "date": None
        }

    return article_obj
