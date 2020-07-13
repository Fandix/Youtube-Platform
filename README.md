# 使用React實現一個小型的Youtube影音平台
透過React與Redux來實現一個小型的Youtube影音平台，使用Axios進行網路請求(GET,POST)，也使用了React-Router-dom分別建立了主頁面(/),收藏頁面(/collect),影音撥放頁面(/video/id)，而影音撥放則是使用了第三方API Video-React來完成，而RWD部分則是使用了手刻CSS，分別做出了手機，平板，電腦三個不同的畫面。

點擊主頁面影片的愛心可以將此影片收藏，可在Collect頁面中看到所以有收藏的影片，在點擊一次便可以將收藏取消，而要取消收藏也可以到收藏頁面，將收藏的影片愛心點掉也可以取消，而在主頁面與收藏頁面都可以透過點擊影片的圖片進到影片撥放頁面。

# Demo
Live URL : https://youtube-platform.fandix.vercel.app/<br>

## 電腦畫面
![PC Main Page](https://ithelp.ithome.com.tw/upload/images/20200712/20124767cuoDqWRmve.png)<br>
Main Page<br><br>

![PC Video Page](https://ithelp.ithome.com.tw/upload/images/20200712/2012476746xF0OCTey.png)<br>
Video Page<br><br>

![PC Collect Page](https://ithelp.ithome.com.tw/upload/images/20200712/2012476746ttBbIuF6.png)<br>
Collect Page<br><br>

# 手機畫面
![Mobil Main Page](https://ithelp.ithome.com.tw/upload/images/20200712/20124767dbqwTUdo9L.png)<br>
Main Page<br><br>

![Mobil Video Page](https://ithelp.ithome.com.tw/upload/images/20200712/20124767lvYbT9OTRT.png)<br>
Video Page<br><br>

# 在此專案中使用那些技術
1. ReactJS
2. Redux (Async)
3. react-router-dom
4. redux-middleware (redux-thunk)
5. Video-react (影音撥放)
6. 串接React API -> react-icons,react-toastify,react-media
7. axios (非同步網路請求)
8. SASS
9. CSS RWD
10. CSS Flexbox
