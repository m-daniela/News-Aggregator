from bs4 import BeautifulSoup, UnicodeDammit
import requests
from fake_useragent import UserAgent


def prepare_soup(url):
    user_agent = UserAgent().random
    headers = {
        "Content-Type": "text/html;charset=UTF-8",
        "User-Agent": user_agent
    }

    response = requests.get(url, headers=headers)

    soup = BeautifulSoup(response.content, "html.parser")

    return soup