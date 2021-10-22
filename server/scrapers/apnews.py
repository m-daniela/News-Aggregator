from . import utils


def get_articles(category="trending-news"):
    """
    Scrape the articles from the main page
    The article object contains the title, link
    intro paragraph and the publication date
    :return: articles: list of article objects
    """
    base = "https://apnews.com"
    url = f"https://apnews.com/hub/{category}"

    soup = utils.prepare_soup(url)

    articles_html = soup.find_all(class_="FeedCard")
    articles = []

    for article in articles_html:
        try:
            header = article.find(attrs={"data-key": "card-headline"})
            title = header.text.strip()
            link = f"{base}{header['href']}"
            intro = article.find(class_="content").text.strip()

            article_obj = {
                "title": title,
                "link": link,
                "intro": intro,
                "date": None
            }
            articles.append(article_obj)
        except Exception as e:
            print(e)

    return articles


def get_by_category(category):
    """
    Scrape the articles from the given category page
    :param category: string with category
    :return: articles: a list of articles
    """
    return get_articles(category)


def combine_paragraphs(paragraphs):
    result = ""
    for p in paragraphs:
        result = f"{result}\n\n{p.text.strip()}"

    return result

def get_article(url):
    """
    Get the title, text and publication date of the article
    :param url: the url to the article
    :return: article object
    """
    soup = utils.prepare_soup(url)

    try:
        header = soup.find(attrs={"data-key": "card-headline"})
        title = header.text.strip()
        article = soup.find(class_="Article")
        paras = article.find_all("p")
        article_text = combine_paragraphs(paras)

        article_obj = {
            "title": title,
            "article": article_text,
            "date": None
        }
    except Exception as e:
        print(e)
        article_obj = {
            "title": None,
            "article": None,
            "date": None
        }

    return article_obj
