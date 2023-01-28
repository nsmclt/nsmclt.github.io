/*
 * @Author: xiao
 * @Date: 2022-09-30 10:48:15
 * @LastEditTime: 2022-10-03 17:00:27
 * @LastEditors: xiao
 * @Description: xiao
 * @FilePath: \WWW\study\colors_v1\js\index.js
 */

$( ( ) => {
	// 获取标签
	function getTitle ( ) {
		return $( ".header" )
	}

	function getNavList ( ) {
		return $( ".list" );
	}

	function getNavListActive ( ) {
		return $( ".list.active" );
	}

	function getNavListIcon ( ) {
		return $( ".list .icon" );
	}

	function getIndicator ( ) {
		return $( ".indicator" );
	}

	function getHederHead ( ) {
		return $( ".header-head img" )
	}

	function getNick ( ) {
		return $( ".sign-nickname" );
	}

	function getSign ( ) {
		return $( ".sign-signature" );
	}

	function getWeather ( ) {
		return $( ".header-weather" );
	}

	function getIp ( ) {
		return $( ".header-ip" );
	}

	function getViewTab ( ) {
		return $( ".section-view .view-tab" );
	}

	function getColour ( ) {
		return $( ".tab-list .colour" );
	}


	// 获取菜单按钮数量
	function getNavListLength ( ) {
		console.log( getNavList( ).length );
	}


	// 获取菜单按钮宽度
	function getNavListWidth ( ) {
		return getNavList( ).outerWidth( true );
	}


	// 获取 indicator 宽度
	function getIndicatorWidth ( ) {
		return getIndicator( ).outerWidth( true );
	}


	// 获取点击下标
	function getNavListIndex ( ) {
		getNavList( ).each( ( i, e ) => {
			getNavListIcon( ).eq( i ).click( ( ) => {
				index = getNavList( ).eq( i ).index( );

				setActiveBtn( index );

				setIndicatorPosition( index )

				getActiveBackground( )

				getTabIndex( index )
			} )
		} )
	}


	// 添加 class 删除兄弟
	function setActiveBtn ( index ) {
		getNavList( ).each( ( i, e ) => {
			$( e ).removeClass( "active" )
		} )

		getNavList( ).eq( index ).addClass( "active" );
	}


	// 修改 indicator 位置
	function setIndicatorPosition ( index ) {
		let left = ( getNavListWidth( ) - getIndicatorWidth( ) ) / 2 + getNavListWidth( ) * index;

		getIndicator( ).css( { "left": left } )
	}


	// tab index 下标
	function getTabIndex ( index ) {
		if ( index == undefined ) {
			index = 0;
		}

		getViewTab( ).children( ).slideUp( );
		getViewTab( ).children( ).eq( index ).slideDown( );

		return index;
	}


	// 获取标题栏背景色
	function getTitleBackground ( ) {
		return getTitle( ).css( "backgroundColor" )
	}


	// 获取菜单栏按钮背景色
	function getActiveBackground ( ) {
		// 定时器勿删 点击后加载背景色有动画延迟 需要一段时间( >0.4s )
		let timer = setTimeout( ( ) => {
			let bgColor = getNavListActive( ).children( ).css( "--cls" )

			clearTimeout( timer )

			setThemeBackground( bgColor )

			return;
		}, 500 );
	}


	// 主题色彩随菜单按钮变化
	function setThemeBackground ( color ) {
		setCss( getTitle( ), { "--cls": color } )

		setCss( getViewTab( ), { "--cls": color } )
	}


	// 模拟数据
	let cssData = [
		{ name: "--ocean", comment: "好看的颜色", rgb: "641,42,77", hex: "#007ab8", copy_count: "1", },
		{ name: "--indigo", comment: "好看的颜色", rgb: "641,42,77", hex: "#1d428a", copy_count: "2", },
		{ name: "--light-gray", comment: "好看的颜色", rgb: "641,42,77", hex: "#f7f7f7", copy_count: "0", },
		{ name: "--darkmode", comment: "好看的颜色", rgb: "641,42,77", hex: "#1e2a31", copy_count: "0", },
		{ name: "--lightmode", comment: "好看的颜色", rgb: "641,42,77", hex: "#f4f8fa", copy_count: "0", },
		{ name: "--hoveerblue", comment: "好看的颜色", rgb: "641,42,77", hex: "#0091da", copy_count: "0", },
		{ name: "--leaf", comment: "好看的颜色", rgb: "641,42,77", hex: "#78be20", copy_count: "0", },
		{ name: "--plum", comment: "好看的颜色", rgb: "641,42,77", hex: "#7f35b2", copy_count: "0", },
		{ name: "--aqua", comment: "好看的颜色", rgb: "641,42,77", hex: "#00c1d5", copy_count: "0", },
		{ name: "--gray", comment: "好看的颜色", rgb: "641,42,77", hex: "#565656", copy_count: "0", },
		{ name: "--lightblue", comment: "好看的颜色", rgb: "641,42,77", hex: "#f4f8fa", copy_count: "0", },
		{ name: "--white", comment: "好看的颜色", rgb: "641,42,77", hex: "#fff", copy_count: "0", },
		{ name: "--black", comment: "好看的颜色", rgb: "641,42,77", hex: "#000", copy_count: "0", },
		{ name: "--black-dark", comment: "好看的颜色", rgb: "641,42,77", hex: "#23241f", copy_count: "0", },
		{ name: "--blue", comment: "好看的颜色", rgb: "641,42,77", hex: "#007bff", copy_count: "0", },
		{ name: "--indigoo", comment: "好看的颜色", rgb: "641,42,77", hex: "#6610f2", copy_count: "0", },
		{ name: "--purple", comment: "好看的颜色", rgb: "641,42,77", hex: "#6f42c1", copy_count: "0", },
		{ name: "--pink", comment: "好看的颜色", rgb: "641,42,77", hex: "#e83e8c", copy_count: "0", },
		{ name: "--red", comment: "好看的颜色", rgb: "641,42,77", hex: "#dc3545", copy_count: "0", },
		{ name: "--orange", comment: "好看的颜色", rgb: "641,42,77", hex: "#fd7e14", copy_count: "0", },
		{ name: "--yellow", comment: "好看的颜色", rgb: "641,42,77", hex: "#ffc107", copy_count: "0", },
		{ name: "--green", comment: "好看的颜色", rgb: "641,42,77", hex: "#28a745", copy_count: "0", },
		{ name: "--teal", comment: "好看的颜色", rgb: "641,42,77", hex: "#20c997", copy_count: "0", },
		{ name: "--cyan", comment: "好看的颜色", rgb: "641,42,77", hex: "#17a2b8", copy_count: "0", },
		{ name: "--gray-dark", comment: "好看的颜色", rgb: "641,42,77", hex: "#343a40", copy_count: "0", },
		{ name: "--primary", comment: "好看的颜色", rgb: "641,42,77", hex: "#007bff", copy_count: "0", },
		{ name: "--secondary", comment: "好看的颜色", rgb: "641,42,77", hex: "#6c757d", copy_count: "0", },
		{ name: "--success", comment: "好看的颜色", rgb: "641,42,77", hex: "#28a745", copy_count: "0", },
		{ name: "--info", comment: "好看的颜色", rgb: "641,42,77", hex: "#17a2b8", copy_count: "0", },
		{ name: "--warning", comment: "好看的颜色", rgb: "641,42,77", hex: "#ffc107", copy_count: "0", },
		{ name: "--danger", comment: "好看的颜色", rgb: "641,42,77", hex: "#dc3545", copy_count: "0", },
		{ name: "--light", comment: "好看的颜色", rgb: "641,42,77", hex: "#f8f9fa", copy_count: "0", },
		{ name: "--dark", comment: "好看的颜色", rgb: "641,42,77", hex: "#343a40", copy_count: "0", },
		{ name: "--dark-blue", comment: "好看的颜色", rgb: "641,42,77", hex: "#075db3", copy_count: "978", },
		{ name: "--pool-green", comment: "好看的颜色", rgb: "641,42,77", hex: "#607d8b", copy_count: "0", },
		{ name: "--hoverblue", comment: "好看的颜色", rgb: "641,42,77", hex: "#00a0e9", copy_count: "0", },
		{ name: "--bright-red", comment: "好看的颜色", rgb: "641,42,77", hex: "#ea3a3a", copy_count: "0", },
		{ name: "--red-orange", comment: "好看的颜色", rgb: "641,42,77", hex: "#ff6a00", copy_count: "0", },
		{ name: "--light-orange", comment: "好看的颜色", rgb: "641,42,77", hex: "#ffebdd", copy_count: "0", },
		{ name: "--blue-green", comment: "好看的颜色", rgb: "641,42,77", hex: "#495770", copy_count: "0", },
		{ name: "--dark-green", comment: "好看的颜色", rgb: "641,42,77", hex: "#07c160", copy_count: "0", },
		{ name: "--light-green", comment: "好看的颜色", rgb: "641,42,77", hex: "#95ec69", copy_count: "0", },
		{ name: "--lighter", comment: "好看的颜色", rgb: "641,42,77", hex: "#91d300", copy_count: "0", },
		{ name: "--lighterr", comment: "好看的颜色", rgb: "641,42,77", hex: "#5fa134", copy_count: "0", },
		{ name: "--dark-orange", comment: "好看的颜色", rgb: "641,42,77", hex: "#ffc300", copy_count: "0", },
		{ name: "--brown-yellow", comment: "好看的颜色", rgb: "641,42,77", hex: "#c87d2f", copy_count: "0", },
		{ name: "--cerise-red", comment: "好看的颜色", rgb: "641,42,77", hex: "#fa5151", copy_count: "0", },
		{ name: "--light-blue", comment: "好看的颜色", rgb: "641,42,77", hex: "#10aeff", copy_count: "0", },
		{ name: "--darker-blue", comment: "好看的颜色", rgb: "641,42,77", hex: "#1485ee", copy_count: "0", },
		{ name: "--light-purple", comment: "好看的颜色", rgb: "641,42,77", hex: "#6467f0", copy_count: "0", },
		{ name: "--lighter-blue", comment: "好看的颜色", rgb: "641,42,77", hex: "#576b95", copy_count: "0", },
		{ name: "--orange-red", comment: "好看的颜色", rgb: "641,42,77", hex: "#f44336", copy_count: "0", },
		{ name: "--fawn", comment: "好看的颜色", rgb: "641,42,77", hex: "#ffa117", copy_count: "0", },
		{ name: "--greene", comment: "好看的颜色", rgb: "641,42,77", hex: "#0fc70f", copy_count: "0", },
		{ name: "--bluee", comment: "好看的颜色", rgb: "641,42,77", hex: "#2196f3", copy_count: "0", },
		{ name: "--violet", comment: "好看的颜色", rgb: "641,42,77", hex: "#b145e9", copy_count: "0", },
		{ name: "--red-bright", comment: "好看的颜色", rgb: "641,42,77", hex: "#cc3f68", copy_count: "0", },
		{ name: "--pink-bright", comment: "好看的颜色", rgb: "641,42,77", hex: "#ee6eb3", copy_count: "0", },
	];


	// 获取 colour 数据
	function getColourData ( data ) {
		getColour( ).empty( );

		data.sort( setArrayObjectSortByField( "hex" ) );

		for ( const i in data ) {
			// console.log( cssData[ i ] );

			setColourData( cssData[ i ].hex, cssData[ i ].copy_count );
		}
	}


	// 数据初始化
	function setColourData ( hex, copy_count ) {
		let hexColor = $( "<div class='hex' data-hex=" + hex + "></div>" );

		let item = $( "<div class='item' data-hot=" + copy_count + " style='--colourBgColor: " + hex + " '></div>" );

		item.append( hexColor );
		getColour( ).append( item )

		getColourHeight( )
	}


	// { name: "--ocean", comment: "好看的颜色", rgb: "641,42,77", hex: "#007ab8", copy_count: "0", },
	// let txt = "";
	// obj = cssData.sort( setArrayObjectSortByField( "hex" ) )
	// for ( const i in obj ) {
	// 	txt += obj[ i ].name + " : " + obj[ i ].hex + ";<br />"
	// }
	// $( ".section-view" ).html( txt )

	// { name: "--ocean", comment: "好看的颜色", rgb: "641,42,77", hex: "#007ab8", copy_count: "0", },


	// 计算 colour 的高度
	function getColourHeight ( ) {
		let h = [ ];
		let height = 0;

		getColour( ).children( ).each( ( i, e ) => {
			h.push( $( e ).outerHeight( true ) );
			height += $( e ).outerHeight( true );
		} )

		let max = Math.max.apply( null, h );

		if ( getColour( ).children( ).length % 2 != 0 ) {
			height += max;
		}

		setColourHeight( ( height / 2 ) );

		getHot( )

		return height;
	}


	// 修改 colour 高度
	function setColourHeight ( height ) {
		setCss( getColour( ), { "--colourHeight": height + "px" } )
	}


	// 获取热度
	function getHot ( ) {
		getColour( ).children( ).each( ( i, e ) => {
			let hot = parseInt( $( e ).attr( "data-hot" ) );

			hot = setNumDiyFormat( hot, 2 );

			setAttr( $( e ), { "data-hot": hot } )
		} )
	}


	// API 接口
	const api = {
		ajax: ( method, api, data, dataType, resFunc, errFunc ) => {
			$.ajax( {
				type: method,
				url: api,
				data: data,
				dataType: dataType,
				success: ( res ) => resFunc( res ),
				error: ( err ) => errFunc( err ),
			} );
		},
		// 不知哪里找来的 API
		qqHead: ( num ) => {
			return "http://q2.qlogo.cn/headimg_dl?dst_uin=" + num + "&spec=640";
		},
		// 不知哪里找来的 API
		qqNick: ( num ) => {
			return "http://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins=" + num;
		},
		// 不知哪里找来的 API
		qqGroupHead: ( num ) => {
			return "http://p.qlogo.cn/gh/" + num + "/" + num + "/100/";
		},
		// 获取QQ头像昵称 API
		// https://api.vvhan.com/qq.html
		qq: ( num ) => {
			return "https://api.vvhan.com/api/qq?qq=" + num;
		},
		// 今日诗词 API 文档
		// https://www.jinrishici.com/doc/#return
		poems: ( ) => {
			return "https://sdk.jinrishici.com/v2/browser/jinrishici.js";
		},
		// 每日一句情话 API
		// https://blog.mcloc.cn/archives/604.html
		love: ( type ) => {
			return "https://api.mcloc.cn/love?type" + type;
		},
		// 每日一句话 API
		// https://blog.mcloc.cn/archives/618.html
		word: ( type ) => {
			return "https://api.mcloc.cn/words?type" + type;
		},
		// 获取网站 favicon.ico
		// https://api.uomg.com/doc-get.favicon.html
		favicon: ( url ) => {
			return "https://api.uomg.com/api/get.favicon?url=" + url;
		},
		// 获取网站 title
		// https://api.vvhan.com/biaoti.html
		title: ( url ) => {
			return "https://api.vvhan.com/api/title?url=" + url;
		},
		// 天气 API
		// https://api.vvhan.com/tianqi.html
		weather: ( ) => {
			return "https://api.vvhan.com/api/weather";
		},
		// 手机号归属地
		// https://api.vvhan.com/shouji.html
		phone: ( num ) => {
			return "https://api.vvhan.com/api/phone?tel=" + num;
		},
		// IP 归属地
		// https://api.vvhan.com/ipinfo.html
		ipLocation: ( ) => {
			return "https://api.vvhan.com/api/getIpInfo";
		},
		// 万能翻译
		// https://api.vvhan.com/fanyi.html
		translation: ( string ) => {
			return "https://api.vvhan.com/api/fy?text=" + string;
		},
	};


	// 获取 API 返回数据
	// 每天一句情话
	function getApiLove ( res ) {
		setText( getSign( ), res )
		return res;
	}

	// 每日一句话
	function getApiWord ( res ) {
		setText( getSign( ), res )
		return res;
	}

	// 今日诗词
	function getApiPoems ( ) {
		jinrishici.load( ( res ) => {
			// console.log( res.data.content );

			setText( getSign( ), res.data.content )
			return res;
		} )
	}

	// QQ 信息
	function getApiNick ( res ) {
		// console.log( res );

		setAttr( getHederHead( ), { "src": res.imgurl } )

		setText( getNick( ), res.name );
		return res;
	}

	// 天气
	function getApiWeather ( res ) {
		// console.log( res.info.type );

		setText( getWeather( ), res.info.type );
		return res;
	}

	// IP 归属地
	function getApiIpLocation ( res ) {
		// console.log( res );

		let location = res.info.country + res.info.prov + res.info.city;
		// let location = res.info.country + res.info.prov;

		setText( getIp( ), location );

		return res;
	}


	function getApiAjax ( string ) {
		api.ajax( "get", api.qq( string ), "", "", getApiNick )

		api.ajax( "get", api.weather( ), "", "", getApiWeather )

		api.ajax( "get", api.ipLocation( ), "", "", getApiIpLocation )
	}



	// 选择 API 调用
	function setApiOption ( option ) {
		switch ( parseInt( option ) ) {
			case 0:
				api.ajax( "get", api.love( "string" ), "", "", getApiLove )
				break;
			case 1:
				api.ajax( "get", api.word( "string" ), "", "", getApiWord )
				break;
			case 2:
				api.ajax( "get", api.poems( ), "", "script", getApiPoems )
				break;

			default:
				api.ajax( "get", api.poems( ), "", "script", getApiPoems )
				break;
		}
	}


	// 修改内容
	function setText ( tag, api ) {
		$( tag ).text( api );
	}


	// 修改属性
	function setAttr ( tag, attr ) {
		for ( let key in attr ) {
			$( tag ).attr( key, attr[ key ] );
		}
	}


	// 修改样式
	function setCss ( tag, css ) {
		for ( var key in css ) {
			$( tag ).css( key, css[ key ] );
		}
	}


	// 数值千分位格式
	function getNumFormat ( num ) {
		return parseInt( num ).toLocaleString( 'en-US' );
	}


	// 数值以 k, w, kw 显示
	function setNumDiyFormat ( num, decimals ) {
		num = parseInt( num );

		decimals == undefined ? decimals = 1 : decimals = decimals;

		if ( num >= 1e7 ) {
			num = ( num / 1e7 ).toFixed( decimals ) + "kw";
		}
		else if ( num >= 1e4 ) {
			num = ( num / 1e4 ).toFixed( decimals ) + "w";
		}
		else if ( num >= 1e3 ) {
			num = ( num / 1e3 ).toFixed( decimals ) + "k";
		}
		else {
			return num;
		}

		return num;
	}


	// 对象排序
	function setObjectSort ( obj, bool ) {
		let newKey = Object.keys( obj ).sort( );
		let newObj = {};

		// true 正序, false 倒序, 默认 true
		if ( bool == undefined ) {
			bool = true;
		} else {
			bool = bool ? true : false;
		}

		if ( !bool ) {
			newKey = Object.keys( obj ).sort( ).reverse( );
		}

		for ( let i = 0; i < newKey.length; i++ ) {
			newObj[ newKey[ i ] ] = obj[ newKey[ i ] ];
		}

		return newObj;
	}


	// 数组对象根据属性名排序
	function setArrayObjectSortByField ( property, bool ) {
		// true 正序, false 倒序, 默认 true
		if ( bool == undefined ) {
			bool = 1;
		} else {
			bool = bool ? 1 : -1;
		}

		return ( value1, value2 ) => {
			let a = value1[ property ];
			let b = value2[ property ];

			if ( a < b ) {
				return bool * -1;
			}
			if ( a > b ) {
				return bool * 1;
			}

			return 0;
		};
	}


	// 颜色转换
	const colorChange = {
		// HEX To RGB(A)
		hexToRgb: ( string, alpha ) => {
			let reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
			if ( !reg.test( string ) ) { return; }

			let color = string.toLowerCase( ).replace( /\#/g, '' );

			// 判断 #
			// if ( string.indexOf( "#" ) >= 0 ) {
			// 	color = color.slice( 1 );
			// }

			// 3位 => 6位
			if ( color.length === 3 ) {
				let c = "";

				for ( var i = 0; i < 3; i += 1 ) {
					c += color.slice( i, i + 1 ).concat( color.slice( i, i + 1 ) );
				}
				color = c;
			}

			// 6位
			let rgba = [ ];

			for ( let i = 0; i < color.length; i += 2 ) {
				rgba.push( parseInt( "0x" + color.slice( i, i + 2 ) ) );
			}

			if ( alpha == undefined ) {
				alpha = 1;
			}

			rgba.push( alpha );

			return rgba;

		},

		// RGB(A) To HEX
		rgbToHex: ( string ) => {
			// 去括号
			// 匹配括号
			let reg = /(?<=\()(.+?)(?=\))/g;

			let color = string.match( reg );

			let hex = [ ];
			if ( color != null ) {
				color = string.match( reg )[ 0 ];

				// 分割数组
				hex = color.split( "," );
			}
			else {
				// 分割数组
				hex = string.split( "," );
			}

			for ( let i = 0; i < hex.length; i++ ) {
				hex[ i ] = parseFloat( hex[ i ] );

				// 打印输出 少几个0, 加上
				if ( hex[ i ] == "0" ) {
					hex[ i ] = "0" + hex[ i ];
				}

				if ( hex.length > 3 && i == ( hex.length - 1 ) ) {
					// 向上取整
					hex[ i ] = Math.round( hex[ i ] * 255 );
				}

				hex[ i ] = ( hex[ i ].toString( 16 ) );
			}

			return hex;
		},

		// HSL To RGB
		hslToRgb: ( string ) => {
			// 去括号
			// 匹配括号
			let reg = /(?<=\()(.+?)(?=\))/g;

			let color = string.match( reg );

			let hsl = [ ];
			if ( color != null ) {
				color = string.match( reg )[ 0 ];

				// 分割数组
				hsl = color.split( "," );
			}
			else {
				// 分割数组
				hsl = string.split( "," );
			}

			const h = hsl[ 0 ] / 360;
			const s = hsl[ 1 ] / 100;
			const l = hsl[ 2 ] / 100;
			let t2;
			let t3;
			let val;

			if ( s === 0 ) {
				val = l * 255;
				return [ val, val, val ];
			}

			if ( l < 0.5 ) {
				t2 = l * ( 1 + s );
			} else {
				t2 = l + s - l * s;
			}

			const t1 = 2 * l - t2;

			const rgb = [ 0, 0, 0 ];
			for ( let i = 0; i < 3; i++ ) {
				t3 = h + ( 1 / 3 ) * -( i - 1 );
				if ( t3 < 0 ) {
					t3++;
				}

				if ( t3 > 1 ) {
					t3--;
				}

				if ( 6 * t3 < 1 ) {
					val = t1 + ( t2 - t1 ) * 6 * t3;
				} else if ( 2 * t3 < 1 ) {
					val = t2;
				} else if ( 3 * t3 < 2 ) {
					val = t1 + ( t2 - t1 ) * ( 2 / 3 - t3 ) * 6;
				} else {
					val = t1;
				}

				rgb[ i ] = Math.round( val * 255 );
			}

			return rgb;
		},

		// RGB To HSL
		rgbToHsl: ( string ) => {
			// 去括号
			// 匹配括号
			let reg = /(?<=\()(.+?)(?=\))/g;

			let color = string.match( reg );

			let rgb = [ ];
			if ( color != null ) {
				color = string.match( reg )[ 0 ];

				// 分割数组
				rgb = color.split( "," );
			}
			else {
				// 分割数组
				rgb = string.split( "," );
			}

			const r = rgb[ 0 ] / 255;
			const g = rgb[ 1 ] / 255;
			const b = rgb[ 2 ] / 255;
			const min = Math.min( r, g, b );
			const max = Math.max( r, g, b );
			const delta = max - min;
			let h;
			let s;

			if ( max === min ) {
				h = 0;
			} else if ( r === max ) {
				h = ( g - b ) / delta;
			} else if ( g === max ) {
				h = 2 + ( b - r ) / delta;
			} else if ( b === max ) {
				h = 4 + ( r - g ) / delta;
			}

			h = Math.min( h * 60, 360 );

			if ( h < 0 ) {
				h += 360;
			}

			const l = ( min + max ) / 2;

			if ( max === min ) {
				s = 0;
			} else if ( l <= 0.5 ) {
				s = delta / ( max + min );
			} else {
				s = delta / ( 2 - max - min );
			}

			return [ Math.round( h ), Math.round( s * 100 ), Math.round( l * 100 ) ];
		},
	};






	// 初始化页面
	function setInitial ( ) {
		// 菜单按钮
		getNavListIndex( )

		// tab 选项卡
		getTabIndex( )

		// colour 数据
		getColourData( cssData );

		// QQ 信息
		getApiAjax( "" );

		// 个签 API 选项
		setApiOption( )
	}
	setInitial( )

} );
