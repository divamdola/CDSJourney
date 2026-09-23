export interface YouTubeVideo {
  rank: number;
  title: string;
  videoId: string;
  imageLink: string;
  youtubeLink: string;
  views: number | null;
  referenceViews: number;
  referenceViewsSource: string;
  note: string;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    rank: 1,
    title: "Aajao for last time this year — 120 minutes together",
    videoId: "7tGqbm6rdus",
    imageLink: "https://i.ytimg.com/vi/7tGqbm6rdus/hqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=7tGqbm6rdus",
    views: null,
    referenceViews: 111000,
    referenceViewsSource: "CDS Journey Telegram post",
    note: "The linked live video was publicly indexed, but the current YouTube view count could not be reliably retrieved."
  },
  {
    rank: 2,
    title: "Complete Physical Geography — 200 Questions / Sunday Class",
    videoId: "QdoJ7eImR5g",
    imageLink: "https://i.ytimg.com/vi/QdoJ7eImR5g/hqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=QdoJ7eImR5g",
    views: null,
    referenceViews: 59000,
    referenceViewsSource: "CDS Journey Telegram post",
    note: "The linked live video was publicly indexed, but the current YouTube view count could not be reliably retrieved."
  },
  {
    rank: 3,
    title: "Push Yourself — 7 Days More / Live Class",
    videoId: "iBI1qcbI_CE",
    imageLink: "https://i.ytimg.com/vi/iBI1qcbI_CE/hqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=iBI1qcbI_CE",
    views: null,
    referenceViews: 58600,
    referenceViewsSource: "CDS Journey Telegram post",
    note: "The linked live video was publicly indexed, but the current YouTube view count could not be reliably retrieved."
  },
  {
    rank: 4,
    title: "BAD Series — CDS 1 2026: 27 Questions You Can Solve",
    videoId: "CHEmMr0Mt4E",
    imageLink: "https://i.ytimg.com/vi/CHEmMr0Mt4E/hqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=CHEmMr0Mt4E",
    views: null,
    referenceViews: 56200,
    referenceViewsSource: "CDS Journey Telegram post",
    note: "The linked live video was publicly indexed, but the current YouTube view count could not be reliably retrieved."
  },
  {
    rank: 5,
    title: "The Biggest Announcement — SSB Gift",
    videoId: "xVYlDdiUku8",
    imageLink: "https://i.ytimg.com/vi/xVYlDdiUku8/hqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=xVYlDdiUku8",
    views: null,
    referenceViews: 55100,
    referenceViewsSource: "CDS Journey Telegram post",
    note: "The linked live video was publicly indexed, but the current YouTube view count could not be reliably retrieved."
  }
];
