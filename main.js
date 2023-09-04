function PrintInDisplay(nameid, x) {
	document.getElementById(nameid).innerHTML = x
}

async function barnav() {
	const baseres = await fetch('https://api.npoint.io/2b17dddea07af261fa71/navbar')
	const base = await baseres.json()

	links = base.length

	let et = ""
	let i = 0

	for (i = 0; i < links; i++) {
		et += "<a href='#" + base[i].Url + "' id='" + base[i].Url + "' onclick='" + base[i].Url + "()' class='btn'>" + base[i].UrlNom + "</a>"
	}

	PrintInDisplay('barra_navegation', et)

}

async function Papeleria() {
	const resp = await fetch('https://api.npoint.io/1b15c3008a8979107ab5/papeleria')
	const fileJson = await resp.json()

	npestañas = fileJson.length


	// let etiqueta = '<section class="tabla-productos">'
	let etiqueta = "<div id='Page'>"
	let i = 0

	for (i = 0; i < npestañas; i++) {
		etiqueta += "<section class='producto'><fieldset class='fieldset'><legend class='legend'>"

		if (!fileJson[i].dicount) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='on'>$" + fileJson[i].dicount + "</p>"
		}
		etiqueta += "$" + fileJson[i].PriceProduct + "</legend>"
		etiqueta += "<div class='background-img-prod'>"
		etiqueta += "<img src='https://github.com/hasael014/img_products/blob/Master/" + fileJson[i].url_img + ".webp?raw=true' alt='" + fileJson[i].url_img + "'></div>"
		// etiqueta += ""
		if (!fileJson[i].new) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='new'>" + fileJson[i].new + "</p>"
		}
		if (!fileJson[i].avalible) {
			etiqueta += ""
		} else {
			etiqueta += "<div class='" + fileJson[i].avalible + "'>Agotado</div>"
		}
		etiqueta += "<h3 class='nom_prod'>" + fileJson[i].ProductName + " " + fileJson[i].brand + "</h3>"
		etiqueta += "</fielset></section>"
	}

	etiqueta += "</div>"

	PrintInDisplay('contenedor_servicios', etiqueta)

}

async function BellesaEHigiene() {
	const resp = await fetch('https://api.npoint.io/71b7af0838a5e63e0f59/BellHi')
	const fileJson = await resp.json()

	npestañas = fileJson.length


	// let etiqueta = '<section class="tabla-productos">'
	let etiqueta = "<div id='Page'>"
	let i = 0

	for (i = 0; i < npestañas; i++) {
		etiqueta += "<section class='producto'><fieldset class='fieldset'><legend class='legend'>"

		if (!fileJson[i].dicount) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='on'>$" + fileJson[i].dicount + "</p>"
		}
		etiqueta += "$" + fileJson[i].PriceProduct + "</legend>"
		etiqueta += "<img src='" + fileJson[i].url_img + "' alt='" + fileJson[i].url_img + "'>"
		if (!fileJson[i].new) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='new'>" + fileJson[i].new + "</p>"
		}
		if (!fileJson[i].avalible) {
			etiqueta += ""
		} else {
			etiqueta += "<div class='" + fileJson[i].avalible + "'>Agotado</div>"
		}
		etiqueta += "<h3 class='nom_prod'>" + fileJson[i].ProductName + " " + fileJson[i].brand + "</h3>"
		etiqueta += "</fielset></section>"
	}

	etiqueta += "</div>"

	PrintInDisplay('contenedor_servicios', etiqueta)

}

async function Salud() {
	const resp = await fetch('https://api.npoint.io/7b81642a52b4cf969687/Salud')
	const fileJson = await resp.json()

	npestañas = fileJson.length


	// let etiqueta = '<section class="tabla-productos">'
	let etiqueta = "<div id='Page'>"
	let i = 0

	for (i = 0; i < npestañas; i++) {
		etiqueta += "<section class='producto'><fieldset class='fieldset'><legend class='legend'>"

		if (!fileJson[i].dicount) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='on'>$" + fileJson[i].dicount + "</p>"
		}
		etiqueta += "$" + fileJson[i].PriceProduct + "</legend>"
		etiqueta += "<img src='" + fileJson[i].url_img + "' alt='" + fileJson[i].url_img + "'>"
		if (!fileJson[i].new) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='new'>" + fileJson[i].new + "</p>"
		}
		if (!fileJson[i].avalible) {
			etiqueta += ""
		} else {
			etiqueta += "<div class='" + fileJson[i].avalible + "'>Agotado</div>"
		}
		etiqueta += "<h3 class='nom_prod'>" + fileJson[i].ProductName + " " + fileJson[i].brand + "</h3>"
		etiqueta += "</fielset></section>"
	}

	etiqueta += "</div>"

	PrintInDisplay('contenedor_servicios', etiqueta)

}

async function Servicios() {
	const resp = await fetch('https://api.npoint.io/334ce1111fd51cd36406/Servicios')
	const fileJson = await resp.json()

	npestañas = fileJson.length

	let texthtml = "<div id='servicios'>"

	for (let i1 = 0; i1 < npestañas; i1++) {
		texthtml += "<section class='serv_producto'>"
		texthtml += "<fieldset class='serv_fieldset'>"
		texthtml += "<img src='https://github.com/hasael014/img_products/blob/Master/" + fileJson[i1].UrlImg + "?raw=true' alt='" + fileJson[i1].UrlImg + "'>"
		texthtml += "<h3>"
		texthtml += fileJson[i1].ServisName
		texthtml += "</h3>"
		texthtml += "<ul class='unlist'>"

		for (let i2 = 0; i2 < fileJson[i1].Serv.length; i2++) {
			texthtml += "<li class='list'>"
			texthtml += fileJson[i1].Serv[i2].Name

			const charac = fileJson[i1].Serv[i2].chara

			if (!charac) {
				texthtml += ""
			} else {
				texthtml += " Tamaño "
				for (let i3 = 0; i3 < charac.SheetSize.length; i3++) {
					texthtml += "<a href='#" + fileJson[i1].Serv[i2].Name + charac.SheetSize[i3].Size + "'>"
					texthtml += charac.SheetSize[i3].Size
					texthtml += "</a>"
					texthtml += "<div id='" + fileJson[i1].Serv[i2].Name + charac.SheetSize[i3].Size + "' class='modal'>"
					texthtml += "<div class='ventana'>"
					texthtml += "<a href='#" + fileJson[i1].Serv[i2].Name + "' style='text-decoration:none;'>X</a>"

					if (!charac.Face) {
						texthtml += "<div class='Precios_copias'>"
						texthtml += "Precios en " + fileJson[i1].Serv[i2].Name + " tamaño " + charac.SheetSize[i3].Size
						texthtml += "</div>"
						texthtml += "<div class='continer'>"
						texthtml += "<fieldset class='cant_face_" + charac.SheetSize[i3].Size + "'>"
						texthtml += "<legend class='face" + charac.SheetSize[i3].Size + "'>"
						texthtml += "</legend>"
						texthtml += "<fieldset class='colorface'>"
						texthtml += "<p>"
						texthtml += charac.InkColor[0] + " : $" + (charac.InkPrice.PriceInkBlack + charac.SheetSize[i3].SheetPrice.PriceSheetWhite)
						texthtml += "</p>"
						texthtml += "<p>"
						texthtml += charac.InkColor[1] + " : $" + (charac.InkPrice.PriceInkBlack + charac.SheetSize[i3].SheetPrice.PriceSheetWhite)
						texthtml += "</p>"
						texthtml += "</fieldset>"
					}
					else {
						texthtml += "<div class='Precios_copias'>"
						texthtml += "Precios en " + fileJson[i1].Serv[i2].Name + " tamaño " + charac.SheetSize[i3].Size
						texthtml += "</div>"
						texthtml += "<div class='continer'>"
						texthtml += "<fieldset class='cant_face'>"
						texthtml += "<legend class='face'>"
						texthtml += charac.Face[0]
						texthtml += "</legend>"
						texthtml += "<fieldset class='colorface'>"
						texthtml += "<legend class='sheet_face'>"
						texthtml += charac.SheetSize[i3].SheetColor[0]
						texthtml += "</legend>"
						texthtml += "<p>"
						texthtml += charac.InkColor[0] + " : $" + (charac.SheetSize[i3].SheetPrice.PriceSheetWhite + charac.InkPrice.PriceInkBlack)
						texthtml += "</p>"
						texthtml += "<p>"
						texthtml += charac.InkColor[1] + " : $" + (charac.SheetSize[i3].SheetPrice.PriceSheetWhite + charac.InkPrice.PriceInkColor)
						texthtml += "</p>"
						texthtml += "</fieldset>"

						if (charac.SheetSize[i3].Size === "oficio") {
							texthtml += ""
						} else {
							texthtml += "<fieldset class='colorface1'>"
							texthtml += "<legend class='sheet_face'>"
							texthtml += charac.SheetSize[i3].SheetColor[1]
							texthtml += "</legend>"
							texthtml += "<p>"
							texthtml += charac.InkColor[0] + " : $" + (charac.SheetSize[i3].SheetPrice.PriceSheetColor + charac.InkPrice.PriceInkBlack)
							texthtml += "</p>"
							texthtml += "<p>"
							texthtml += charac.InkColor[1] + " : $" + (charac.SheetSize[i3].SheetPrice.PriceSheetColor + charac.InkPrice.PriceInkColor)
							texthtml += "</p>"
							texthtml += "</fieldset>"
						}
						texthtml += "</fieldset>"
					}
					texthtml += "</div>"
					texthtml += "</div></div>"
					if (i3 == 0) {
						texthtml += " y "
					}
				}
			}

			texthtml += "</li>"
		}

		texthtml += "</ul></section></fieldset>"
	}
	console.log(fileJson)

	texthtml += "</div>"

	PrintInDisplay('contenedor_servicios', texthtml)

}

async function Mas() {
	const resp = await fetch('https://api.npoint.io/112109c179f2a0ed57b9/Mas')
	const fileJson = await resp.json()

	npestañas = fileJson.length


	// let etiqueta = '<section class="tabla-productos">'
	let etiqueta = "<div id='Page'>"
	let i = 0

	for (i = 0; i < npestañas; i++) {
		etiqueta += "<section class='producto'><fieldset class='fieldset'><legend class='legend'>"

		if (!fileJson[i].dicount) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='on'>$" + fileJson[i].dicount + "</p>"
		}
		etiqueta += "$" + fileJson[i].PriceProduct + "</legend>"
		etiqueta += "<img src='" + fileJson[i].url_img + "' alt='" + fileJson[i].url_img + "'>"
		if (!fileJson[i].new) {
			etiqueta += ""
		} else {
			etiqueta += "<p class='new'>" + fileJson[i].new + "</p>"
		}
		if (!fileJson[i].avalible) {
			etiqueta += ""
		} else {
			etiqueta += "<div class='" + fileJson[i].avalible + "'>Agotado</div>"
		}
		etiqueta += "<h3 class='nom_prod'>" + fileJson[i].ProductName + " " + fileJson[i].brand + "</h3>"
		etiqueta += "</fielset></section>"
	}

	etiqueta += "</div>"

	PrintInDisplay('contenedor_servicios', etiqueta)

}

barnav()

Servicios()
