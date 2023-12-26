# WebRTC

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

### 1、什么是 WebRTC

WebRTC（Web Real-Time Communications）是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。它通过使用浏览器内置的音频、视频和数据通道，实现了实时的音视频传输和数据传输.

### 2、WebRTC 的应用场景

WebRTC 的能力使其适用于各种实时通信场景：

- 点对点通讯：WebRTC 支持浏览器之间进行音视频通话，例如语音通话、视频通话等；
- 电话会议：WebRTC 可以支持多人音视频会议，例如腾讯会议、钉钉会议等；
- 屏幕共享：WebRTC 不仅可以传输音视频流，还可以用于实时共享屏幕；
- 直播：WebRTC 可以用于构建实时直播，用户可以通过浏览器观看直播内容。
- 等等等

可玩性很强，可以做很多有趣的事情。（哪怕是被玩烂了概念“元宇宙”😂） 在网速与硬件越来越好的趋势下，WebRTC 它有无限可能。

### 3、WebRTC API

WebRTC API

- getUserMedia 演示如何使用 getUserMedia 获取用户的摄像头和麦克风（MediaStream）

- RTCPeerConnection 它是 WebRTC 中用于建立对等连接的主要 API（点对点通信）

- RTCDataChannel RTCDataChannel，它允许在对等连接之间传输任意数据（数据通信）

#### 3.1 getUserMedia

接受一个约束对象 constraints 作为参数，用来指定需要获取到什么样的媒体流。

```

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
// 参数表示需要同时获取到音频和视频
.then(stream => {
  // 获取到优化后的媒体流
  let video = document.querySelector('#rtc');
  video.srcObject = stream;
})
.catch(err => {
  // 捕获错误
});

```

### 4、实际应用和演示

实际应用和演示 a. 搭建一个简单的 WebRTC 应用演示如何搭建一个基本的 WebRTC 应用，展示实时音视频通信。 b. 问题和解决方案讨论在实际应用中可能遇到的问题，以及解决这些问题的方法。

### 5、安全性考虑

a. 安全性问题强调 WebRTC 应用中的安全性问题，例如加密和身份验证。

### 6、WebRTC 的未来发展

a. 新特性和标准介绍 WebRTC 的最新发展，包括新的 API 和标准。 b. 应用领域扩展探讨 WebRTC 在不同领域的应用，如在线教育、远程医疗等。

### Q & A

### 总结

<!--
 结语 a. 总结要点总结 WebRTC 的关键概念和应用。 b. 鼓励进一步学习提供学习资源，鼓励听众深入了解 WebRTC。通过这样的结构，你可以在分享中涵盖 WebRTC 的核心概念、API 和实际应用，使听众对这一技术有一个全面的了解。在分享中加入一些实际演示，可以更好地展示 WebRTC 的功能和潜在应用。
1. 介绍 WebRTC a. 定义和背景说明 WebRTC 是什么，它的全称是 Web Real-Time Communication。提到 WebRTC 的起源和发展背景。 b. 核心特性强调 WebRTC 的核心特性，如实时音视频通信、数据传输等。
2. WebRTC 架构 a. 组件概述解释 WebRTC 架构的主要组件，包括媒体引擎、信令服务器、NAT 遍历等。 b. 信令传递解释信令服务器的作用，以及在 WebRTC 中如何建立连接和交换元数据。
3. WebRTC API a. getUserMedia 演示如何使用 getUserMedia 获取用户的摄像头和麦克风。 b. RTCPeerConnection 介绍 RTCPeerConnection，它是 WebRTC 中用于建立对等连接的主要 API。 c. RTCDataChannel 解释 RTCDataChannel，它允许在对等连接之间传输任意数据。 -->
