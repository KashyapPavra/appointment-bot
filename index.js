const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto(
		"https://sede.administracionespublicas.gob.es/icpplustieb/citar?p=8&locale=es"
	);
	await page.select("select[id*='tramiteGrupo[0]']", "4010");
	const acceptBtn = await page.$("input#btnAceptar");
	await Promise.all([
		acceptBtn.click("button[type=submit]"),
		page.waitForNavigation({ waitUntil: "networkidle2" }),
	]);
	const enterBtn = await page.$("#btnEntrar");
	await Promise.all([
		enterBtn.click("button[type=submit]"),
		page.waitForNavigation({ waitUntil: "networkidle2" }),
	]);

	await page.type("#txtIdCitado", "Y8877202K");
	await page.type("#txtDesCitado", "KASHYAP JAYESHBHAI PAVRA");
	await page.select("select[id*='txtPaisNac']", "412");
	const btn2 = await page.$("input#btnEnviar");

	await Promise.all([
		btn2.click(),
		page.waitForNavigation({ waitUntil: "networkidle2" }),
	]);
	const btn3 = await page.$("input#btnEnviar");
	await Promise.all([
		btn3.click(),
		page.waitForNavigation({ waitUntil: "networkidle2" }),
	]);
})();
