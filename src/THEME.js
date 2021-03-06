export const THEME = {
	MAIN_COLOR: '#FFA000',
	BACKGROUND_COLOR: '#fff',
	NAV_TEXT_COLOR: '#eeeeee',
	NAV_HOVER_COLOR: '#F57C00',
	DARK_COMPONENT_TEXT_COLOR: '#ddd',
	LIGHT_COMPONENT_TEXT_COLOR: '#000',
	FOOTER_TEXT_COLOR: '#fff',
	DECOR_COLOR: '#FFA000'
}

export const setCss = (css) => {
	let style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
			style.styleSheet.cssText = css;
	} else {
			style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
	return style;
}