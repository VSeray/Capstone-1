const speakers = [{
      name: 'Yochai Benkler',
      photo: 'assets/first-speaker.png',
      job: 'Berkman professor of Entrepreneurial legal Studies at Harvard Law School',
      desc: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    },
    {
      name: 'SohYeong Noh',
      photo: 'assets/second-speaker.png',
      job: 'Director of Art Center Nabl and a board member of A.G.S Korea',
      desc: 'As the man venue for new media art production in Korea,Nabi promotes cross-discipinary collaboration and understanding among science technology, humanities, and the arts.',
    },
    {
      name: 'Lila Tretikov',
      photo: 'assets/third-speaker.png',
      job: 'Executive Director of the Wikimedia Foundation',
      desc: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a bilion people around the world every month',
    },
    {
      name: 'Kilnam Chon',
      photo: 'assets/fourth-speaker.png',
      job: '',
      desc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons In 2012, he was inducted into the inaugural class of the Internet Societys (ISOC) Internet Hall of Fame.',
    },
    {
      name: 'Julia Leda',
      photo: 'assets/fifth-speaker.png',
      job: 'President of Young Pirates of Europe',
      desc: 'European ingetration, political democracy and participation  of youth through online as her major condern,Redas report  outlining potential changes to EU copyright law was approved by the Parlament in July.',
    },
    {
      name: 'Ryan Merkley',
      photo: 'assets/six-speaker.png',
      job: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
      desc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move-ment.',
    }
  ];
  function getSpeakers(speaker) {
    const speakerData = `<ul class="speakers">
    <li class="first">
     <img src="${speaker.photo}" alt="${speaker.name}"/>
     <span class="texContainer">
     <span class="name">${speaker.name}</span>
     <span class="introduce">${speaker.job}</span>
     <span class="activity">${speaker.desc}</span>
    </li> 
    </ul>`;
    return speakerData;
  }

  const speakerSection = document.querySelector('.featuredSpeakers');

  function featuredSpeakers() {
    let speakersBuild = '';
    speakers.forEach((speaker) => {
      speakersBuild += getSpeakers(speaker);
    });
    speakerSection.innerHTML = speakersBuild;
  }
  speakerSection.onresize = featuredSpeakers();