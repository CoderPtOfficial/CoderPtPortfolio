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
			Sou programador e tambem tecnico de eletronica, programo desde os 15 anos\
			, mas nao possuo qualquer tipo de curso, aprendi tudo com livros, videos, blogs...\
			, ja a eletronica frequentei um curso de eletronica e telecomunicacoes\
			 de nivel 4 em um curso cientifico-tecnologico de ensino secundario.\
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
				No meu humilde canal, posto videos aleatorios sobre programacao, hacking\
				e eletronica. Penso em trazer cursos, mas ja exite diversos canais com esse tipo de conteudo\
				,ou seja, provavelmente nao irei fazer, porem aulas de eletronica e iot tentarei um dia.\
				</b>\
			</p>\
		</div>\
		<div>\
			<a href="https://www.instagram.com/coder_pt/" target="_blank">\
				<img border="0" src="insta.png">\
			</a>\
			<p>\
				<b>\
				Nao uso muito, mas se quiser pode dar um follow la. Quem sabe se um dia viro\
				um fa de social media.\
				</b>\
			</p>\
		</div>\
		<div>\
			<a href="https://twitter.com/DanielR81720066" target="_blank">\
				<img border="0" src="twitte.png">\
			</a>\
			<p>\
				<b>\
				Tambem tenho uma conta no passarinho, nunca faço postagens.\
				Se quiseres segue la.\
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
		<h1>Portfolio</h1>\
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
					Atualmente nao possuo um portfólio detalhado, mas ja esta em desenvolvimento.\
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
		<h1>Curriculo</h1>\
		<div style=margin-top:50px>\
			<div style=margin-top:50px>\
				<p><b>Curriculo detalhado com foto apenas por contato</b></p>\
				<div style=margin-top:50px>\
					<h2 style=margin-top:25px>\
						Linguagens de programacao\
					</h2>\
					<p>\
						<b>\
						As linguagens de meu dominio sao: C++ , C, C#, Python, Java.\
						</b>\
					</p>\
					<p>\
						<b>\
						Porem caso necessario posso programar em qualquer outra linguagem.\
						Aprender não é problema.\
						</b>\
					</p>\
					<h2 style=margin-top:100px>\
						Áreas de programação\
					</h2>\
					<p>\
						<b>\
						Prefiro trabalhar em areas como: Game Dev Multiplataforma, Android App,\
						Winforms ,Microcontroladores.\
						</b>\
					</p>\
					<p>\
						<b>\
						Contudo adoraria poder trabalhar em areas como: Hybrid Apps.\
						</b>\
					</p>\
					<h2 style=margin-top:100px>Hacking</h2>\
					<p>\
						<b>\
						Apesar de ainda ser particularmente novo (mais de um ano), ja estou a aprimorar os\
						meus conhecimentos e posso dizer que tenho varios conceitos bem cimentados\
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
					Porem se preferir pode contactar atraves destas redes sociais.\
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