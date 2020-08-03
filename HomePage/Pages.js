document.getElementById("itemHome").click();

var lastId;
function Home(id){
	clean(id,lastId);
	document.getElementById("MassiveText").innerHTML='\
\
	<h1>Quem sou</h1>\
\
	<div>\
		<p style=margin-top:50px>\
			<b>\
			Bem vindo, eu sou Daniel Santos.\
			</b>\
		</p>\
		<p style="margin-top:25px;">\
			<b>\
			Sou programador e também técnico de eletrónica, programo desde os 15 anos\
			, mas não possuo qualquer tipo de curso, aprendi tudo com livros, videos, blogs...\
			, já a eletrónica frequentei um curso de eletrónica e telecomunicações\
			 de nivel 4 em um curso científico-tecnológico de ensino secundário.\
			</b>\
		</p>\
	</div>\
\
\
';
	lastId=id;
}

function RedesSocial(id){
	clean(id,lastId);
	document.getElementById("MassiveText").innerHTML='\
\
	<h1>Redes social</h1>\
	<div>\
		<div>\
			<a href="https://www.youtube.com/channel/UCWZuSLddahq0A3ad7J5JFTw" target="_blank">\
				<img border="0" src="ytLogo.png">\
			</a>\
			<p>\
				<b>\
				No meu humilde canal, posto videos aleatórios sobre programação, hacking\
				e eletrónica. Penso em trazer cursos, mas já exite diversos canais com esse tipo de conteúdo\
				,ou seja, provavelmente não irei fazer, porém aulas de eletrónica e iot tentarei um dia.\
				</b>\
			</p>\
		</div>\
		<div>\
			<a href="https://www.instagram.com/coder_pt/" target="_blank">\
				<img border="0" src="insta.png">\
			</a>\
			<p>\
				<b>\
				Não uso muito, mas se quiser pode dar um follow lá. Quem sabe se um dia viro\
				um fã de social media.\
				</b>\
			</p>\
		</div>\
		<div>\
			<a href="https://twitter.com/DanielR81720066" target="_blank">\
				<img border="0" src="twitte.png">\
			</a>\
			<p>\
				<b>\
				Também tenho uma conta no passarinho, nunca faço postagens.\
				Se quiseres segue lá.\
				</b>\
			</p>\
		</div>\
	</div>\
';
	lastId=id;
}

function Port(id){
	clean(id,lastId);
	document.getElementById("MassiveText").innerHTML='\
		<h1>Portfólio</h1>\
		<div>\
			<div>\
				<a href="https://github.com/CoderPtOfficial" target="_blank">\
					<img border="0" src="git.png">\
				</a>\
				<p >\
					<b>\
					No meu GitHub pode ver os meus projetos, espero que goste.\
					</b>\
				</p>\
			</div>\
			<div>\
				<p>\
					<b>\
					Atualmente não possuo um portfólio detalhado, mas já está em desenvolvimento.\
					</b>\
				</p>\
			</div>\
		</div>\
	';
	lastId=id;
}

function Cv(id){
	clean(id,lastId);

	document.getElementById("MassiveText").innerHTML='\
		<h1>Currículo</h1>\
		<div style=margin-top:50px>\
			<div style=margin-top:50px>\
				<p><b>Currículo detalhado com foto apenas por contato</b></p>\
				<div style=margin-top:50px>\
					<h2 style=margin-top:25px>\
						Linguagens de programação\
					</h2>\
					<p>\
						<b>\
						As linguagens de meu dominio são: C++ , C, C#, Python, Java.\
						</b>\
					</p>\
					<p>\
						<b>\
						Porém caso necessário posso programar em qualquer outra linguagem.\
						Aprender não é problema.\
						</b>\
					</p>\
					<h2 style=margin-top:100px>\
						Áreas de programação\
					</h2>\
					<p>\
						<b>\
						Prefiro trabalhar em áreas como: Game Dev Multiplataforma, Android App,\
						Winforms ,Microcontroladores.\
						</b>\
					</p>\
					<p>\
						<b>\
						Contudo adoraria poder trabalhar em áreas como: Hybrid Apps.\
						</b>\
					</p>\
					<h2 style=margin-top:100px>Hacking</h2>\
					<p>\
						<b>\
						Apesar de ainda ser particularmente novo (mais de um ano), já estou a aprimorar os\
						meus conhecimentos e posso dizer que tenho vários conceitos bem cimentados\
						</b>\
					</p>\
				</div>\
			</div>\
		</div>\
		';
	lastId=id;
}

function Contato(id){
	clean(id,lastId);
	document.getElementById("MassiveText").innerHTML='\
		<h1>Contatos</h1>\
		<div style=margin-top:50px>\
			<p>\
				<b>\
					Pode entrar em contato através deste email: danielrs57@sapo.pt\
				</b>\
			</p>\
			<p>\
				<b>\
					Porém se preferir pode contactar através destas redes sociais.\
				</b>\
			</p>\
			<div>\
				<a href="https://www.instagram.com/coder_pt/" target="_blank">\
					<img border="0" src="insta.png">\
				</a>\
			</div>\
			<div>\
				<a href="https://twitter.com/DanielR81720066" target="_blank">\
					<img border="0" src="twitte.png">\
				</a>\
			</div>\
		</div>\
		';
	lastId=id;
}

function onHover(id){
	if(lastId!=id)id.style.backgroundColor="#d4b611";
}

function onOut(id){
	if(lastId!=id)id.style.backgroundColor="black"
}

function clean(Id,LastId){
	if(LastId!=undefined)LastId.style.backgroundColor="black";
	Id.style.backgroundColor="#cf931b";
	
}