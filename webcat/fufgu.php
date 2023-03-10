
<!DOCTYPE html>

<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
		<meta name="renderer" content="webkit" />
		<meta name="force-rendering" content="webkit" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Webt共享空间</title>
		<link rel="stylesheet" href="http://space.webcat.top/css/mdui.min.css" />
		<link rel="stylesheet" href="http://space.webcat.top/css/search-bar.css" />

		<script src="js/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
  	<!-- MDUI CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
  integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw"
  crossorigin="anonymous"
/>

<!-- MDUI JavaScript -->
<script
  src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"
  integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A"
  crossorigin="anonymous"
></script>
	</head>
	<body class="mdui-appbar-with-tab mdui-appbar-with-toolbar">

		<!-- 默认抽屉栏在左侧 -->
		<div class="mdui-drawer mdui-drawer-full-height mdui-color-white mdui-drawer-close" id="left-drawer">
			<ul class="mdui-list">
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
					<div class="mdui-list-item-content">Inbox</div>
				</li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">star</i>
					<div class="mdui-list-item-content">Starred</div>
				</li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">send</i>
					<div class="mdui-list-item-content">Sent mail</div>
				</li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">drafts</i>
					<div class="mdui-list-item-content">Drafts</div>
				</li>
				<li class="mdui-subheader">Subheader</li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">email</i>
					<div class="mdui-list-item-content">All mail</div>
				</li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
					<div class="mdui-list-item-content">Trash</div>
				</li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">error</i>
					<div class="mdui-list-item-content">Spam</div>
				</li>
			</ul>
		</div>

		<div id="el">
			<div class="mdui-appbar mdui-appbar-scroll-toolbar-hide mdui-appbar-fixed mdui-shadow-0 mdui-appbar-inset">
				<div class="mdui-toolbar mdui-color-white">
					<a mdui-drawer="{target: '#left-drawer'}" class="mdui-btn mdui-btn-icon mdui-ripple">
						<i class="mdui-icon material-icons">menu</i>
					</a>
					<span class="mdui-typo-title">共免费空间</span>
					<div class="mdui-toolbar-spacer"></div>
					<a href="javascript:toUserInfo();" class="mdui-btn mdui-btn-icon mdui-ripple">
						<i class="mdui-icon material-icons">account_circle</i>
					</a>
					<a href="javascript: toUpload();" class="mdui-btn mdui-btn-icon mdui-ripple">
						<i class="mdui-icon material-icons">file_upload</i>
					</a>
					<a mdui-menu="{target: '#example-attr'}" class="mdui-btn mdui-btn-icon mdui-ripple">
						<i class="mdui-icon material-icons">more_vert</i>
					</a>
					<ul class="mdui-menu" id="example-attr">
						<li class="mdui-menu-item">
							<a href="javascript:window.location.reload();" class="mdui-ripple">
								<i class="mdui-menu-item-icon mdui-icon material-icons">refresh</i>刷新
							</a>
						</li>
						<li class="mdui-menu-item">
							<a href="https://easydoc.net/s/83577341/6jlk3K8w/Tz90wLkP">
								<i class="mdui-menu-item-icon mdui-icon material-icons">help_outline</i>帮助文
							</a>
						</li>
						<li class="mdui-menu-item" disabled>
							<a href="javascript:;" class="mdui-ripple">
								<i class="mdui-menu-item-icon mdui-icon material-icons">settings</i>设置
							</a>
						</li>
						<li class="mdui-divider"></li>
						<li class="mdui-menu-item">
							<a href="javascript:iapp.fn('source.end()');" class="mdui-ripple">
								<i class="mdui-menu-item-icon mdui-icon material-icons">exit_to_app</i>退出
							</a>
						</li>
					</ul>
				</div>


				<div id="tabBar" class="mdui-tab mdui-tab-full-width mdui-color-white" mdui-tab>
					<a href="#tab0" type-id="" class="mdui-ripple">全部</a>
					<a :href="['#tab' + item.id]" :type-id="item.id" class="mdui-ripple"
						v-for="item in sourceCodeTypeList">{{item.name}}</a>
				</div>
			</div>


			<div id="searchBar" class="search-bar">
				<i class="mdui-icon material-icons mdui-text-color-theme-icon">search</i>
				<input placeholder="Search" id="searchText" />
				<button id="searchButton" @click="search();"
					class="mdui-btn mdui-btn-icon mdui-ripple mdui-text-color-theme-icon">
					<i class="mdui-icon material-icons">arrow_forward</i>
				</button>
			</div>
			<div id="contentList" style="width: 100%;"
				class="mdui-row-xs-2 mdui-row-sm-4 mdui-row-md-5 mdui-row-lg-6 mdui-grid-list">
				<div class="mdui-col" @click="showDetail(item.id);" v-for="item in sourceCodeList"
					style="padding-left: 9px; padding-right: 5px; padding-top: 5px; padding-bottom: 3px;">
					<div class="mdui-grid-tile mdui-shadow-5 mdui-ripple" style="border-radius: 15px;">
						<img :src="[getIndexOneUrl(item.imgUrls)]" class="mdui-img-rounded"
							style="height: 300px; object-fit: cover;" />
						<div class="mdui-grid-tile-actions mdui-grid-tile-actions-bottom">
							<div class="mdui-grid-tile-text">
								<div class="mdui-grid-tile-title">{{item.name + " " + item.versionName}}</div>
								<div class="mdui-grid-tile-subtitle">{{item.packageName}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mdui-text-center" style="margin-top: 20px; margin-bottom: 30px;">
				<span id="loadingText" @click="nextPage();" class="mdui-center"
					style="color: #aaa; font-size: 16px;">正在加载...</span>
			</div>
			<button onclick="toUpload();" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-pink">
				<i class="mdui-icon material-icons">add</i>
			</button>
		</div>

		<script src="http://space.webcat.top/js/mdui.min.js"></script>

		<script type="text/javascript">
			var version = getQueryVariable("appVersion");
			var isDark = getQueryVariable("isDark");
			if (isDark != null) {
				localStorage.version = version;
				localStorage.isDark = isDark;
			}

			if (isDark == "true") {
				$("body").addClass("mdui-theme-layout-dark");
			}
			var checkTypeId = "";
			var searchText = "";

			window.addEventListener("show.mdui.tab", function(_this) {
				var inst = _this._detail.inst;
				var tabIndex = inst.activeIndex;
				var typeId = inst.$tabs.get(tabIndex).getAttribute('type-id');
				checkTypeId = typeId;
				vue.sourceCodeList = [];
				vue.getSourceCodeList(typeId, 1, 10);
			});

			var vue = new Vue({
				el: "#el",
				data: {
					sourceCodeTypeList: [],
					sourceCodeList: [],
					pageInfo: {}
				},
				methods: {
					getSourceCodeTypeList() {
						$.ajax({
							url: "http://source.webcat.top/source/querySourceCodeTypeList",
							type: "GET",
							async: false,
							success(data) {
								if (data.success) {
									vue.sourceCodeTypeList = data.data;
								}
							}
						});
					},
					getSourceCodeList(typeId, page, limit) {
						$("#loadingText").text("正在加载...");
						$.ajax({
							url: "http://source.webcat.top/source/querySourceCodeList",
							type: "GET",
							data: {
								"typeId": typeId,
								"name": searchText,
								"page": page,
								"limit": limit
							},
							async: true,
							success(data) {
								if (data.success) {
									vue.sourceCodeList = vue.sourceCodeList.concat(data.data.list);
									vue.pageInfo = data.data
									if (!data.data.isLastPage) {
										$("#loadingText").text("加载更多...");
									} else {
										$("#loadingText").text("------ 我是有底线的 ------");
									}
								}
							}
						});
					},
					showDetail(id) {
						var authInfoStr = localStorage.authInfo;
						if (authInfoStr == null) {
							var url = "http://space.webcat.top/page/detail.html?id=" + id + "&appVersion=" + version +
							"&isDark=" + isDark;
							if (version == "5.21") {
								iapp.fn('source.showDetail("' + url + '")');
								return;
							}
							window.location.href = url;
							
						}
						var authInfo = JSON.parse(authInfoStr);
						if (authInfo.user.email == null) {
						//	mdui.alert("您的账号还未绑定邮箱，请先绑定邮箱！");
					//		return;
						}
						var url = "login.html";
						if (version == "5.21") {
							iapp.fn('source.showDetail("' + url + '")');
							return;
						}
						window.location.href = url;
      return;
					},
					getIndexOneUrl(urls) {
						var urlList = JSON.parse(urls);
						return urlList[0] + "?imageMogr2/format/webp";
					},
					nextPage() {
						if (vue.pageInfo.isLastPage) {
							mdui.snackbar({
								message: '请勿触碰我的底线！',
								timeout: 2000
							});
							return;
						}
						vue.getSourceCodeList(checkTypeId, vue.pageInfo.nextPage, vue.pageInfo.pageSize);
					},
					search() {
						document.activeElement.blur('#searchText');
						searchText = $("#searchText").val();
						vue.sourceCodeList = [];
						vue.pageInfo.nextPage = 1;
						vue.pageInfo.isLastPage = false;
						vue.nextPage();
					}
				}
			});
			vue.getSourceCodeTypeList();

			function toUpload() {
				var authInfoStr = localStorage.authInfo;
				if (authInfoStr != null) {
					var authInfo = JSON.parse(authInfoStr);
					$.ajax({
						url: "http://source.webcat.top/source/preUpload",
						type: "POST",
						data: {
							"token": authInfo.token
						},
						async: true,
						success(data) {

						}
					});
				}
				iapp.fn('source.toUi("upload.iyu")');
			}



			function toUserInfo() {
				var url = "login.html";
				if (version == "5.21") {
					iapp.fn('source.showDetail("' + url + '")');
					return;
				}
				window.location.href = url
			}

			window.onscroll = function() {
				//变量scrollTop是滚动条滚动时，距离顶部的距离
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				//变量windowHeight是可视区的高度
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				//变量scrollHeight是滚动条的总高度
				var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
				//滚动条到底部的条件
				if (scrollTop + windowHeight >= scrollHeight-20) {
					//写后台加载数据的函数
					//console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
					let text = $("#loadingText").text();
					if(text == "加载更多...") {
						console.log("加载下一页...");
						vue.nextPage();
					}
					
				}
			}

			function getQueryVariable(variable) {
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split("=");
					if (pair[0] == variable) {
						return pair[1];
					}
				}
				return (false);
			}

			$(document).ready(function() {
				// $('#searchText').bind("enterKey", function(e) {
				// 	alert("Enter key pressed");
				// });
				$('#searchText').keyup(function(e) {
					if (e.keyCode == 13) {
						vue.search();
					}
				});
			});
		</script>
	</body>
</html>