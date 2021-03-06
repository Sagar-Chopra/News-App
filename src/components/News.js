import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": "BBC Sport",
      "title": "T20 World Cup: Pakistan v Namibia - clips, radio & text",
      "description": "Follow live text, TMS commentary and in-play clips as Pakistan play Namibia in the T20 World Cup at the Sheikh Zayed Cricket Stadium, Abu Dhabi.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/58260326",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.21.1/images/bbc-sport-logo.png",
      "publishedAt": "2021-11-02T14:07:31.6235035Z",
      "content": "Pakistan: Babar Azam (c), Mohammad Rizwan (wk), Fakhar Zaman, Mohammad Hafeez, Shoaib Malik, Asif Ali, Imad Wasim, Shadab Khan, Hasan Ali, Shaheen Shah Afridi, Haris Rauf.\r\nNamibia: Stephan Baard, Mi… [+163 chars]"
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": null,
      "title": "\"Am Old Enough To Be His Father...\": Amarinder Singh Jabs Navjot Sidhu",
      "description": "Ex Punjab Chief Minister Amarinder Singh on Tuesday evening launched a searing attack on rival Navjot Sidhu in a letter announcing his resignation from the Congress, calling the former cricketer \"an acolyte of the Pakistani deep state\".",
      "url": "https://www.ndtv.com/india-news/amarinder-singh-congress-resignation-letter-unstable-acolyte-of-pakistani-deep-state-amarinder-singh-on-sidhu-2597192",
      "urlToImage": "https://c.ndtvimg.com/2021-07/v1o5d7ic_sidhu-amarinder-ani-650_625x300_23_July_21.jpg",
      "publishedAt": "2021-11-02T12:56:15+00:00",
      "content": "Chandigarh: Ex Punjab Chief Minister Amarinder Singh on Tuesday evening launched a searing attack on rival Navjot Sidhu in a letter announcing his resignation from the Congress, calling the former cr… [+2730 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor() {
    super();
    console.log('constructor');
    this.State = {
      articles: this.articles,
      loading: false
    }

  }


  render() {
    return (
      <div className="container my-3">
        <h2>News App - Top Headlines</h2>
        <div className="row">
          {this.State.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
