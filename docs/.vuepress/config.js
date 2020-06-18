module.exports = {
	head: [
		['link', {
			rel: 'shortcut icon',
			type: "image/x-icon",
			href: `./favicon.ico`
		}]
	],
	title: 'Leix Wang',
	description: '多年的笔记文档整理.',
	host: '0.0.0.0',
	port: 8888,
	serviceWorker: true,
	themeConfig: {
		repo: 'leixwang/docs',
		docsDir: 'docs',
		lastUpdated: 'Last Updated',
		editLinks: true,
		editLinkText: '帮助我们改进页面内容！',
		// algolia: {
		// 	apiKey: '<API_KEY>',
		// 	indexName: '<INDEX_NAME>'
		// },
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'MarkDown',
				link: '/markdown/'
			},
		],
		sidebar: [{
				title: 'Vue ',
				collapsable: true,
				children: [
					'/markdown/vue/',
				]
			},
			{
				title: 'React ',
				collapsable: true,
				children: [
					'/markdown/react/',
				]
			},
			{
				title: 'Node.js 文档',
				collapsable: true,
				children: [
					'/markdown/node.js/',
				]
			},
			{
				title: '计算机语言',
				collapsable: true,
				children: [
					'/markdown/lang/javascript',
					'/markdown/lang/swift',
					'/markdown/lang/markdown',
				]
			},
			{
				title: '服务器配置文档',
				collapsable: true,
				children: [
					"/markdown/server/centos",
					"/markdown/server/conter-mysql",
					"/markdown/server/install-ubuntu",
					"/markdown/server/mac-osx",
					"/markdown/server/meteor",
					"/markdown/server/mongodb",
					"/markdown/server/nodejs",
					"/markdown/server/redis",
					"/markdown/server/sh",
					"/markdown/server/shadowsocket",
					"/markdown/server/ubuntu-command",
					"/markdown/server/Ubuntu-install-ReactNative-env",
					"/markdown/server/Ubuntu-Server-Wi-Fi",
					"/markdown/server/pptpconfig",
					"/markdown/server/jenkins",

				]
			},
			{
				title: '免费电子书',
				collapsable: true,
				children: [
					'/markdown/freebook/',
				]
			},
			{
				title: 'Linux 驱动开发',
				collapsable: true,
				children: [
					'/markdown/kernel/driver',
				]
			},
			{
				title: '常用工具文档',
				collapsable: true,
				children: [
					'/markdown/tools/github',
					'/markdown/tools/vmware',
					'/markdown/tools/atom',
					'/markdown/tools/vscode',
				]
			},
			{
				title: 'WEB 文档',
				collapsable: true,
				children: [
					'/markdown/web/hexo',
					'/markdown/web/html5',
				]
			},
			{
				title: 'RAG.JS 文档',
				collapsable: true,
				children: [
					'/markdown/rag.js/',
				]
			},
			{
				title: 'ETH DAPP',
				collapsable: true,
				children: [
					'/markdown/eth-dapp/',
				]
			},
			{
				title: 'Matrix-synapse',
				collapsable: true,
				children: [
					'/markdown/matrix-synapse/',
				]
			},
			{
				title: 'Open SIP 文档',
				collapsable: true,
				children: [
					'/markdown/opensip/',
				]
			},
			{
				title: '管理学',
				collapsable: true,
				children: [
					'/markdown/psychology/36ask',
				]
			},
			{
				title: '常用的工具',
				collapsable: true,
				children: [
					'/markdown/tools/python',
					'/markdown/tools/github',
					'/markdown/tools/vscode',
					'/markdown/tools/GitBlit',
				]
			},


		]
	
	}
}