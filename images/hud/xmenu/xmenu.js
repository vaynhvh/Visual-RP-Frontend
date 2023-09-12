let xDown = false;
let xMenu = mp.browsers.new("package://client/xmenu/index.html");

mp.keys.bind(0x58, true, () => {
    if (!xDown) {
        xDown = true;

		xMenu.execute(`showXMenu();`)
		

    }
    
});

mp.keys.bind(0x58, false, () => {
	if (xDown) {
    xDown = false;
	xMenu.execute(`hideXMenu();`)

	}
});
