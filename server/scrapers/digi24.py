from . import utils


def get_articles():
    """
    Scrape the articles from the main page
    The article object contains the title, link
    intro paragraph and the publication date
    :return: articles: list of article objects
    """

    base_url = "https://www.digi24.ro"
    latest = f"{base_url}/ultimele-stiri"

    soup = utils.prepare_soup(latest)
    articles_html = soup.find_all("article", limit=10)
    articles = []

    for article in articles_html:
        try:
            header = article.find(class_="article-title")
            title = header.text.strip()
            link = f"{base_url}{header.find('a')['href']}"
            intro = article.find("p", class_="article-intro").text.strip()
            date = article.find("p", class_="article-date").text.strip()

            article_obj = {"title": title,
                   "link": link,
                   "intro": intro,
                   "date": date}

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
    base_url = "https://www.digi24.ro"
    news = f"{base_url}/stiri/{category}"

    soup = utils.prepare_soup(news)

    articles_html = soup.find_all("article", limit=10)

    articles = []

    try:
        # the first article needs special treatment
        # it doesn't include the date and the content
        # is structured differently
        article = articles_html[0]
        header = article.find(class_="article-title")
        title = header.text.strip()
        link = f"{base_url}{header.find('a')['href']}"
        intro = article.find("p", class_="article-intro").text.strip()

        article_obj = {"title": title,
                       "link": link,
                       "intro": intro,
                       "date": None}

        articles.append(article_obj)

        for article in articles_html[1:]:
            try:
                content = article.find(class_="article-content")
                header = content.find(class_="article-title")
                title = header.text.strip()
                link = f"{base_url}{header.find('a')['href']}"

                intro = content.find(class_="article-intro")
                # the second article doesn't have the intro paragraph
                # so create an object only with the title and the link
                if intro is None:
                    article_obj = {
                        "title": title,
                        "link": link,
                        "intro": None,
                        "date": None
                    }
                else:
                    intro = intro.text.strip()
                    date = content.find(class_="article-date").text.strip()

                    article_obj = {
                        "title": title,
                        "link": link,
                        "intro": intro,
                        "date": date
                    }

                articles.append(article_obj)

            except Exception as e:
                print(e)

    except Exception as e:
        print(e)

    return articles


def get_article(url):
    """
    Get the title, text and publication date of the article
    :param url: the url to the article
    :return: article object
    """
    soup = utils.prepare_soup(url)

    try:
        title = soup.find("h1").text.strip()
        article = soup.find(class_="entry")
        paragraphs = article.find_all("p")

        article_text = utils.combine_paragraphs(paragraphs)

        date = soup.find(class_="author-meta").text.strip()

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
