console.log('Бот успешно запущен!')
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
const cars = [
	{
		name: 'Не имеется',
		cost: 0,
		id:0
	},
	{
		name: 'Копейка',
		cost: 20000,
		id: 1
	},
	{
		name: 'Ока',
		cost: 30000,
		id: 2
	},
	{
		name: 'Волга',
		cost: 40000,
		id: 3
	},
	{
		name: 'Пятнашка',
		cost: 50000,
		id: 4
	},
	{
		name: 'Девятка',
		cost: 60000,
		id: 5
	},
	{
		name: 'Mercedes-AMG One',
		cost: 500000,
		id: 6
	},
	{
		name: 'Aston Martin Valkyrie',
		cost: 1500000,
		id: 7
	},
	{
		name: 'Lamborghini Veneno',
		cost: 5000000,
		id: 8
	},
	{
		name: 'Bugatti Centodieci',
		cost: 8000000,
		id: 9
	},
	{
		name: 'Rolls-Royce Sweptail',
		cost: 11000000,
		id: 10
	}
];

const clans = require('./database/clans.json');
const fractions = require('./database/fractions.json');


const utils = {
	sp: (int) => {
	int = int.toString();
	return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
		bank: (int) => {
	int = int.toString();
	return int.split('').reverse().join('').match(/[0-9]{1,4}/g).join(' ').split('').reverse().join('');
	},
	rn: (int, fixed) => {
	if (int === null) return null;
	if (int === 0) return '0';
	fixed = (!fixed || fixed < 0) ? 0 : fixed;
	let b = (int).toPrecision(2).split('e'),
	k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
	c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
	d = c < 0 ? c : Math.abs(c),
	e = d + ['', ' тыс.', ' млн.', ' млрд.', ' трлн.', ' трлд.'][k];
	
	e = e.replace(/e/g, '');
	e = e.replace(/\+/g, '');
	e = e.replace(/Infinity/g, ' много.');
	
	return e;
	},
	gi: (int) => {
	int = int.toString();
	
	let text = ``;
	for (let i = 0; i < int.length; i++)
	{
	text += `${int[i]}⃣`;
	}
	
	return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
	return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
	return array[utils.random(array.length - 1)];
	},
	time: () => {
	return parseInt(new Date().getTime()/1000)
	}
	}

let promo = "0";

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);
let shar = utils.pick([`возможно`, `наверно`, `правда`, `нет`,`не думают`, `вообще нет`, `не согласны`]);

let users = require('./database/users.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('- Сохранение прошло успешно!');
	console.log('');
}, 36000000);

setInterval(async () => {

smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

}, 1);

setInterval(async () => {

	cartop = utils.pick([`Велосипед`, `Копейка`, `Москвич`, `Четырка`, `Девятка`, `Пятнашка`, `Lada Kalina`, `Lada Priora`, `Ford Mustang`, `Lamborgini Huracan`, `Tesla Cybertruck`, `Запорожец`, `Запорожец`]);
	
	}, 1);

	setInterval(async () => {

		shar = utils.pick([`возможно`, `наверно`, `правда`, `нет`,`не думают`, `вообще нет`, `не согласны`]);
		
		}, 1);

setInterval(async () => {

		win = utils.pick([`Победа`, `Проигрыш`]);
		
		}, 1);

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}

async function saveClans()
{
require('fs').writeFileSync('./clans.json', JSON.stringify(clans, null, '\t'));
return true;
}

async function saveFractions()
{
require('fs').writeFileSync('./fractions.json', JSON.stringify(fractions, null, '\t'));
return true;
}


async function saveUsers()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	require('fs').writeFileSync('./database/clans.json', JSON.stringify(clans, null, '\t'));
	require('fs').writeFileSync('./database/fractions.json', JSON.stringify(fractions, null, '\t'));
	return true;
}

vk.setOptions({ token: '3dfc284aef6df2e5710ad3886c196713dad571613096e6be84ab46f9dac167ba001d83022394fdd373017', pollingGroupId: 194587085});
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
if(Number(message.senderId) < 0) return;

if(/\[club185127746\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club185127746\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			ban: false,
			bank: 0,
			lvl: 1,
			exp: 0,
			rub: 0,
			donrub: 0,
			status: `Пользователь`,
			promo: false,
			fаm: false,
			gang: false,
			car: 0,
			samolet: `нету`,
			vertolet: `нету`,
			home: `нету`,
			work: `Безработный`,
			weapon: `нету`,
			deagle: 0,
			ak: 0,
			m4: 0,
			awp: 0,
			prava: `нету`,
			ban: false,
			mute: false,
			banrep: false,
			zvezda: 0,
			clan: `нету`,
			fractionid: 0,
			tag: user_info.first_name,
            firstmsg: true
		});
		console.log(`1 человек > зарегистрировался в вашем боте`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban === true) return message.send(`${message.user.tag}, ваш аккаунт был заблокирован за нарушение правил в боте ⛔`);

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.firstmsg)
	{

	let server = 0
	server = message.user.uid 
		
message.send(`${message.user.tag}, приветствую тебя в боте Role Play.
Напишите "Команды" чтобы узнать команды.`);
		message.user.firstmsg = false;

		saveUsers();
		return;

	}

	if(!command)
	{

		if(!message.isChat) return;
		if(message.isChat) return;

	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда: ${message.text}`)
	console.log(` id: ${message.user.uid}`)
	console.log(``)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

var kkkk = 74200
const mcpetrade = {
	"shop": 134335,
	"server": 19001,
}

cmd.hear(/^(?:лаунчер)$/i, async (message, bot) => {
message.send(`${message.user.tag}, лаунчер успешно запущен
 Server #1 > ${getRandomInt(0,12)} | 10000 игроков
  Напишите "Подключиться" чтобы войти на сервер`)
});

cmd.hear(/^(?:статистика)$/i, async (message, bot) => {
	return bot(`ваша статистика ниже:
	🌠 | Имя » ${message.user.tag}
🔥 | Уровень » ${message.user.lvl}
⭐ | Exp » ${message.user.exp}
💰 | Деньги » ${utils.sp(message.user.rub)}
💣 | Уровень розыска » ${message.user.zvezda}
🌵 | Работа » ${message.user.work}
🚗 | Транспорт » ${cars[message.user.car].name}
🤵 | Статус » ${message.user.status}`)})


cmd.hear(/^(?:банк)$/i, async (message, bot) => {
	if(message.user.bank < 1) return bot(`ваш банковский счет пуст.`);
	return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк [кол-во]" для пополнения`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк снять [кол-во]" для снятия`);

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили в банк ${utils.sp(message.args[1])}$ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}$`);
	}
});


cmd.hear(/^(?:промокод|промо)$/i, async (message, bot) => {
message.send(`${message.user.tag}, для использовании команды напишите «Промокод [промокод]»`)
message.send({sticker_id:17980})
});
cmd.hear(/^(?:промокод|промо) (.*)$/i, async (message, bot) => {
if(message.user.promo === true) return message.send(`${message.user.tag}, вы уже активировали промокод.`)

if(message.args[1] !== "Hellmoney") message.send(`${message.user.tag}, не верный промокод! ⛔`)

if(message.args[1] === "HellMoney")
{
message.send(`${message.user.tag}, вы успешно подключили промокод «HellMoney»`)
message.send({sticker_id:51022})
message.send(`${message.user.tag}, на ваш аккаунт было зачислено 5 руб.`)
message.user.rub += 5
message.user.promo = true
vk.api.messages.send({ user_id: 177242130, message: ` 
@id${message.user.id} (${message.user.tag}) активировал ваш промокод «HellMoney»` });
}
});

cmd.hear(/^(?:Здания)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Здания, с которых можно получать прибыль:
${message.user.business === 1 ? '🔸' : '🔹'} 1. База ВВС - 50.000 монет
⠀ ⠀ ⠀ Прибыль: 1 рубин / час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Верфь - 100.000 монет
⠀ ⠀ ⠀ Прибыль: 2 рубина /час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Казарма - 300.000 монет
⠀ ⠀ ⠀ Прибыль: 3 рубина / час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Золотой рудник - 500.000 монет
⠀ ⠀ ⠀ Прибыль: 5 рубинов / час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Экспедициенный центр - 1.500.000 монет
⠀ ⠀ ⠀ Прибыль: 10 рубинов / час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Военное училище - 25.000.000 монет
⠀ ⠀ ⠀ Прибыль: 30 рубинов / час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Инженерный комплекс - 80.000.000 монет
⠀ ⠀ ⠀ Прибыль: 50 рубинов / час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Производительный центр - 150.000.000 монет
⠀ ⠀ ⠀ Прибыль: 80 рубинов / час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Пространственная шахта - 500.000.000 монет
⠀ ⠀ ⠀ Прибыль: 150 рубинов / час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Ремонтный завод - 800.000.000 монет
⠀ ⠀ ⠀ Прибыль: 220 рубинов / час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Банк - 1.500.000.000 монет
⠀ ⠀ ⠀ Прибыль: 300 рубинов / час
Для покупки введите "Здание [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:кнопка)$/i, async (message, bot) => {
	message.send(`ку, кнопки:`, {keyboard:JSON.stringify(
{
"inline": true,
"one_time": false,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{\"button\": \"1\"}",
"label": "Открыть мега ящик"
},
"color": "negative"
},
{
"action": {
"type": "text",
"payload": "{\"button\": \"1\"}",
"label": "Купить мега ящик"
},
"color": "positive"
}
]
]
})
});
});

cmd.hear(/^(?:семья создать)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`введите название для семьи!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(🤵)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
return bot(`в названии есть запрещенные символы ${smileerror}`);
} 
if(message.args[1].length >= 7) return bot(`максимальная длина названия семьи 7 символов`);
let name = message.args[1];
let clanid = message.user.clanid;
if(message.user.rub < 50000000000) return bot(`создание семьи стоит 50.000.000.000$`);
message.user.rub -= 50000000000;
let cl = clans.length

if(clans[clanid]) return bot(`вы уже состоите в семье!`);
if(!clans[clanid]) { 
clans.push({
id: cl,
users: {},
name: name,
balance: 0,
rating: 0,
smile: `🛡`,
peoples: 1,
wons: 1,
los: 0,
open: true,
lvl: 0
});
message.user.clanid = cl;
clans[cl].users[message.user.uid] = {
id: message.user.id,
uid: message.user.uid,
level: 3
}


return bot(`семья «${message.args[1]}» успешно создан!\nВведите «семья помощь» чтобы посмотреть команды семья!`);
}
});

cmd.hear(/^(?:семья состав)$/i, async (message, bot) => {
let clanid =
 
message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);

let text = ``;
let mp = ``;

for(let id in clans[clanid].users) {
let user = users[id];
if(user.mention == true) {
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель семьи - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель семьи - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
} else {
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель семьи - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель семьи - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
};
}

if(clans[clanid].lvl == 0) { 
mp += `5`;
};
if(clans[clanid].lvl == 1) {
mp += `15`;
};
if(clans[clanid].lvl == 2) {
mp += `25`;
};
if(clans[clanid].lvl == 3) {
mp += `50`;
};
if(clans[clanid].lvl == 4) {
mp += `100`;
};

return bot(`участники семьи «${clans[clanid].name}» [${clans[clanid].peoples}/${mp}]:
${text}`);
});

cmd.hear(/^(?:семья название)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`введите название для семья!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(🤵|📔|📗📘|📙|📕|⍻|🗸|√|☑|✔|👑|✅|✓)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
return bot(`в названии есть запрещенные символы ${smileerror}`);
}
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семья!
	❓ Для вступления введите «семья войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`название семья может менять заместитель семья и выше!`);
if(clans[clanid].lvl == 0) {
if(message.args[1].length >= 7) return bot(`максимальная длина названия семьи 7 символов`);
};
if(clans[clanid].lvl == 1) {
if(message.args[1].length >= 10) return bot(`максимальная длина названия семьи 10 символов`);
};
if(clans[clanid].lvl == 2) {
if(message.args[1].length >= 13) return bot(`максимальная длина названия семьи 13 символов`);
};
if(clans[clanid].lvl == 3) {
if(message.args[1].length >= 15) return bot(`максимальная длина названия семьи 15 символов`);
};
clans[clanid].name = message.args[1];
return bot(`название семьи сменено на «${message.args[1]}»`);
});

cmd.hear(/^(?:семья метка)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`введите метку для семья!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(й|ц|у|к|е|н|г|ш|щ|з|х|ъ|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю|1|2|3|4|5|6|7|8|9|0)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
return bot(`в метке семьи можно использовать только смайлы ${smileerror}`);
}
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`метку семьи может менять заместитель семьи и выше!`);
if(message.args[1].length >= 3) return bot(`максимальная длина метки семья 1 смайл`);
clans[clanid].smile = message.args[1];
return bot(`метка семьи сменена на «${message.args[1]}»`);
});

cmd.hear(/^(?:семья открыть)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 1) return bot(`открывать семья может модератор семьи и выше!`);
if(clans[clanid].open == true) return bot(`семья уже открытый!`)
clans[clanid].open = true;
return bot(`вы успешно открыли семья!`);
});

cmd.hear(/^(?:семья закрыть)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 1) return bot(`закрывать семья может модератор семьи и выше!`);
if(clans[clanid].open == false) return bot(`семьи уже закрытый!`)
clans[clanid].open = false;
return bot(`вы успешно закрыли семья!`);
});

cmd.hear(/^(?:семья)\s(?:пополнить)\s(.*)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
if(message.user.settings.adm > 2) return bot(`администратор не может пополнять семья. 🚫`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы ${smileerror}`, {attachment:'market-185655451_3045142'});
else if(message.args[1] <= message.user.balance)
{
message.user.balance -= message.args[1];
clans[clanid].balance += message.args[1];

return bot(`вы положили на счёт семьи ${utils.sp(message.args[1])}$`);
}
});

cmd.hear(/^(?:семья)\s(?:снять)\s(.*)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`снимать деньги семьи может Заместитель семьи и выше!`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, clans[clanid].balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(message.args[1] > clans[clanid].balance) return bot(`на балансе семьи нет данной суммы ${smileerror}`, {attachment:'market-185655451_3045142'});
else if(message.args[1] <= clans[clanid].balance)
{
message.user.balance += message.args[1];
clans[clanid].balance -= message.args[1];

return bot(`вы сняли ${utils.sp(message.args[1])}$ с баланса семьи

Напомним, передача средств через семьи строго запрещена и карается блокировкой!`);
}
});

cmd.hear(/^(?:семья повысить)\s([0-9]+)$/i,
 
async (message, bot) => {
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в семье`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`повышать может только создатель семьи!`);


if(!clans[clanid]) return bot(`этот человек не состоит в семье!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом семье!`);
if(clans[user.clanid].users[user.uid].level >= 2) return bot(`нельзя повысить игрока до создателя!`);
clans[clanid].users[user.uid].level += 1;
return bot(`игрок ${user.tag} был повышен в семье!`); 
});

cmd.hear(/^(?:семья понизить)\s([0-9]+)$/i, async (message, bot) => {
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в семье`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`понижать может только создатель семьи!`);


if(!clans[clanid]) return bot(`этот человек не состоит в семья!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом семье!`);
if(clans[user.clanid].users[user.uid].level <= 0) return bot(`нельзя понизить игрока ниже участника!`);
clans[clanid].users[user.uid].level -= 1;
return bot(`игрок ${user.tag} был понижен в семье!`); 
});

cmd.hear(/^(?:семья кик)\s([0-9]+)$/i, async (message, bot) => {
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в семье`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`кикать может только создатель семьи!`);


if(!clans[clanid]) return bot(`этот человек не состоит в семье!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом семье!`);
clans[clanid].peoples -= 1;
user.clanid = false;
delete clans[clanid].users[user.uid];
return bot(`игрок ${user.tag} был кикнут из семьи!`); 
});

cmd.hear(/^(?:семья войти|семья зайти|семья вход|семья присоединиться|семья присоедениться|семья)\s([0-9]+)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(clans[clanid]) return bot(`вы уже состоите в семье!`);
if(!message.args[1]) return bot(`вы не указали ID семьи!`);
let idclan = message.args[1];

if(!clans[idclan]) return bot(`данного семьи не существует! Укажите правильный ID семьи.`);
if(clans[idclan].delete == true) return bot(`данный семья удалён.`);
if(clans[idclan].lvl == 0) { 
if(clans[idclan].peoples >= 5) return bot(`семья переполнен!`);
};
if(clans[idclan].lvl == 1) { 
if(clans[idclan].peoples >= 15) return bot(`семья переполнен!`);
};
if(clans[idclan].lvl == 2) { 
if(clans[idclan].peoples >= 25) return bot(`семья переполнен!`);
};
if(clans[idclan].lvl == 3) { 
if(clans[idclan].peoples >= 50) return bot(`семья переполнен!`);
};
if(clans[idclan].lvl == 4) { 
if(clans[idclan].peoples >= 100) return bot(`семья переполнен!`);
};
if(clans[idclan].open == false) return bot(`🔒 семья закрыт, доступ по приглашениям`);
if(clans[idclan].open == true){
clans[idclan].peoples += 1;
message.user.clanid = Number(message.args[1]);
if(!clans[idclan].users[message.user]) {
clans[idclan].users[message.user.uid] = {
id: message.user.id,
uid: message.user.uid,
level: 1
}
}
return bot(`вы вошли в семья «${clans[idclan].name}»!\nВведите "семья помощь" чтобы посмотреть команды семьи!`);
}

});

cmd.hear(/^(?:семья покинуть)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
	❓ Для вступления введите «семья войти [ID]»`);
clans[clanid].peoples -=
 
1;
message.user.clanid = false;
delete clans[clanid].users[message.user.uid];
return bot(`вы покинули семья!`)});

cmd.hear(/^(?:семья)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет семьи!
❓ Для вступления введите «семья войти [ID]»`);

let text = ``;
let tipe = ``;
let lv = ``;
let mp = ``;
let num = 10;

for(let id in clans[clanid].users) {
if(!num < 1) {
num -= 1;
let user = users[id];
if(user.mention == true) {
if(clans[clanid].users[id].level == 3) text += `👑 Создатель семьи - @id${user.id} (${user.tag})\n`;
} else {
if(clans[clanid].users[id].level == 3) text += `👑 Создатель семьи - @id${user.id} (${user.tag})\n`;
};
};
}

if(clans[clanid].lvl == 0) { 
lv += `1`;
mp += `5`;
cost = `🆕 Улучшение семьи до 2 уровня стоит 100.000.000.000$`;
};
if(clans[clanid].lvl == 1) {
lv += `2`;
mp += `15`;
cost = `🆕 Улучшение семьи до 3 уровня стоит 500.000.000.000$`;
};
if(clans[clanid].lvl == 2) {
lv += `3`;
mp += `25`;
cost = `🆕 Улучшение семьи до 4 уровня стоит 2.500.000.000.000$`;
};
if(clans[clanid].lvl == 3) {
lv += `4`;
mp += `50`;
cost = `🆒 семья улучшен максимально.`;
};
if(clans[clanid].open == true) tipe += `🔓 семья открыт, свободный для входа`;
if(clans[clanid].open == false) tipe += `🔒 семья закрыт, доступ по приглашениям`;

return bot(`информация о семье «${clans[clanid].name}»:
🛡 Уровень семьи: ${lv}
👑 Рейтинг семьи: ${utils.sp(clans[clanid].rating)}
📜 ID семьи: ${clans[clanid].id}
🥇 Побед: ${utils.sp(clans[clanid].wons)}, поражений: ${utils.sp(clans[clanid].los)}
${tipe}
💰 В казне семьи: ${utils.sp(clans[clanid].balance)}$
☠ На вас ещё не нападали другие семьи.

${cost}
👥 Участников: ${utils.sp(clans[clanid].peoples)}/${mp}

🏹 Логотип семьи: ${clans[clanid].smile}
${text}
`);
});

cmd.hear(/^(?:семья атака|семья атаковать|семья|награбить|семья атака)$/i, async (message, bot) => { 
	let clanid = message.user.clanid; 
	if(!clans[clanid]) return bot(`у вас нет семьи!`); 
	if(clans[clanid].users[message.user.uid].level < 3) return bot(`проводить атаки может только глава семьи.`); 
	if(clans[clanid].peoples < 5) return bot(`что бы проводить атаки необходимо иметь минимум 5 участников. `); 
	if(message.user.ataka >= 0) return bot(`игроки вашего семьи сильно устали, они восстановят силы через час!`); 
	if(clans[clanid].wons = 100)
	{
		message.send(`${message.user.tag}, ваш семья одержал 100 побед!
		Вам был повышен уровень семьи!`)
		clans[clanid].lvl += 1
	}

	message.user.ataka = 1200;
	clanataka = utils.random(32456724, 10000000000); 
	let atackedclan = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	if(atackedclan === 1)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну семьи. ${smilesuccess}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].wons)} побед, поздравляем!`);
	}

	if(atackedclan === 2)
	{
		clans[clanid].rating -= 1; 
		clans[clanid].los += 1; 
		return bot(`атака состоялась ⚔
		семья противника оказался сильнее, вы проиграли. ${smileerror}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].los)} поражений!`);
	}

	if(atackedclan === 3)
	{
		return bot(`атака не состоялась, кажется что ваши противники струсили ⚔`);
	}

	if(atackedclan === 4)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну семьи. ${smilesuccess}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].wons)} побед, поздравляем!`);
	}

	if(atackedclan === 5)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну семьи. ${smilesuccess}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 6)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну семьи. ${smilesuccess}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 7)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну семьи. ${smilesuccess}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 8)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну семьи. ${smilesuccess}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 9)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну семьи. ${smilesuccess}
		Ваш семья теперь имеет 🥇${utils.sp(clans[clanid].wons)} побед, поздравляем!`);
	}
	});
cmd.hear(/^(?:семья помощь)$/i, async (message, bot) => {
let clanid = message.user.clanid;
return bot(`информация по командам:
⠀1. семья - информация о семье
⠀2. семья состав - участники семьи
⠀3. семья создать [название] - создать семья
⠀4. семья название [название] - смена названия семьи
⠀5. семья метка [метка] - символ семьи
⠀6. семья открыть - открыть семья для вступлений 🔓
⠀7. семья закрыть - закрыть семья для вступлений 🔒
⠀8. семья [пополнить/снять] [сумма] - казна семьи
⠀9. семья атака - атаковать другой семья
⠀10. семья повысить [id] - повысить звание игроку
⠀11. семья понизить [id] - понизить звание игроку
⠀12. семья кик [id] - выгнать игрока
⠀13. семья войти [id семьи] - вступить в семья
⠀14. семья покинуть - покинуть семья

📜 Админ в семье может снимать деньги, приглашать и исключать игроков, установить новое название/логотип, а так же закрыть семья для вступлений.`);
});

cmd.hear(/^(?:копать шахту)$/i, async (message, bot) => { 
let taxicash = 0

taxicash = getRandomInt(100, 1000);
message.user.rub += taxicash;

return bot(`вы заработали ${utils.sp(taxicash)}виртов
`)}); 


cmd.hear(/^(?:казино)\s(.*) (.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.rub);
	let color = utils.pick([`Красный`, `Зелёный`, `Чёрный`, `Синий`])
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] > message.user.rub)
	{
		return bot(`Вы неправильно ввели ставку!
		Ибо у вас не хватило денег! ${smilekazinobad2}`)
	}

	if(message.args[2] != `Красный`)
	if(message.args[2] != `Зелёный`)
	if(message.args[2] != `Чёрный`)
	if(message.args[2] != `Синий`)
	{
		return bot(`Вы неправильно ввели цвет ставки! ${smilekazinobad2}`)	
	}

	if(color != message.args[2])
	{
		message.user.rub -= message.args[1]
		return bot(`Вы не угадали ставку! ${smilekazinobad2}
		Цвет выигрышной ставки: ${color}
		На руках: ${utils.sp(message.user.rub)}`)
	}

	if(color = message.args[2])
	{
		message.args[1] *= 2
		message.user.rub += message.args[1]
		return bot(`Вы угадали ставку! ${smilesuccess}
		Цвет выигрышной ставки: ${color}
		На руках: ${utils.sp(message.user.rub)}`)
	}
	});

	cmd.hear(/^(?:apanel)$/i, async (message, bot) => {
		if(message.user.status != `Администратор`)
		{
			return bot(`вы не являетесь Администатором.`)
		} 

		message.send(`Админ панель открыта!
		ban [id] [причина]
		unban [id] [причина]
		giverub [id] [сумма]
		givedonate [id] [сумма]
		makeadmin [id]
		repmsg [id] [ответ]`)});


		cmd.hear(/^(?:ban)\s(.*) (.*)$/i, async (message, bot) => { 
			message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
			message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
			message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
			message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
			let prichina = ``
			if(message.user.status != `Администратор`) return; 
			
			{ 
			let user = users.find(x=> x.uid === Number(message.args[1])); 
			if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
			
			
			user.ban = true; 
			prichina = message.args[2]

			saveUsers();
			await bot(`вы забанили игрока *id${user.id} (${user.tag}).`,); 
			vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был заблокирован. ⛔
			Причина бана: ${prichina}` }); 
			}
			});

			cmd.hear(/^(?:repmsg)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
				if(message.user.status != `Администратор`) return;
			
				const user = await users.find(x=> x.uid === Number(message.args[1]));
				if(!user) return;
			
				vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:
				Язык: 🇷🇺
				
				${message.args[2]}` });
			});

			cmd.hear(/^(?:unban)\s(.*)$/i, async (message, bot) => { 
				message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
				message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
				message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
				message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
				
				if(message.user.status != `Администратор`) return;
				
				{ 
				let user = users.find(x=> x.uid === Number(message.args[1])); 
				if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
				
				
				user.ban = false; 
				
				saveUsers();
				await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`); 
				vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был разблокирован.` }); 
				}
				});
				cmd.hear(/^(?:giverub)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
					message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
					message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
					message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
					
					if(message.user.status != `Администратор`) return; 
					if(!Number(message.args[2])) return; 
					message.args[2] = Math.floor(Number(message.args[2])); 
					
					if(message.args[2] <= 0) return; 
					
					{ 
					let user = users.find(x=> x.uid === Number(message.args[1])); 
					if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
					
					
					user.rub += message.args[2]; 
					
					
					await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`); 
					if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
					Администратор выдал вам ${utils.sp(message.args[2])}$! 
					🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
					} 
					});

					cmd.hear(/^(?:givedonate)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
						message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
						message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
						message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
						
						if(message.user.status != `Администратор`) return; 
						if(!Number(message.args[2])) return; 
						message.args[2] = Math.floor(Number(message.args[2])); 
						
						if(message.args[2] <= 0) return; 
						
						{ 
						let user = users.find(x=> x.uid === Number(message.args[1])); 
						if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
						
						
						user.donrub += message.args[2]; 
						
						
						await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}donate!`); 
						if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
						Администратор выдал вам ${utils.sp(message.args[2])}donate! 
						🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
						} 
						});
						cmd.hear(/^(?:Переехать) (.*)$/i, async (message, bot) => {
						
						if(message.args[1] != "Los Santos")
						if(message.args[1] != "San Fierro")
						if(message.args[1] != "Las Venturas")
						{
							return bot(`вы не правильно указали штат для переезда! ${smileerror}`)
						}
						
						if(message.user.rub <= 50000)
						{
							return bot(`у вас недостаточно средств для переезда в данный штат ${smileerror}
							Необходимо 50.000 вирт.`)
						}
						message.user.rub -= 50000
						message.user.zvezda = 0
						message.send(`${message.user.tag},вы успешно переехали в ${message.args[1]}`)});

						cmd.hear(/^(?:Подключиться)$/i, async (message, bot) => {
							await bot(`вы успешно подключились на сервер!`)})

							cmd.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
								if(!message.args[1]) return bot(`машины: 
							${message.user.car === 1 ? '🔹' : '🔸'} 1. Копейка (20.000вирт.)
							${message.user.car === 2 ? '🔹' : '🔸'} 2. Ока (30.000вирт.)
							${message.user.car === 3 ? '🔹' : '🔸'} 3. Волга (40.000вирт.)
							${message.user.car === 4 ? '🔹' : '🔸'} 4. Пятнашка (50.000вирт.)
							${message.user.car === 5 ? '🔹' : '🔸'} 5. Девятка (60.000вирт)
							${message.user.car === 6 ? '🔹' : '🔸'} 6. Mercedes-AMG One (500.000вирт)
							${message.user.car === 7 ? '🔹' : '🔸'} 7. Aston Martin Valkyrie (1.500.000вирт)
							${message.user.car === 8 ? '🔹' : '🔸'} 8. Lamborghini Veneno (5.000.000вирт)
							${message.user.car === 9 ? '🔹' : '🔸'} 9. Bugatti Centodieci (8.000.000вирт)
							${message.user.car === 10 ? '🔹' : '🔸'} 10. Rolls-Royce Sweptail (11.000.000вирт.)
							Для покупки введите "Машина [номер]"`);
							
								const sell = cars.find(x=> x.id === Number(message.args[1]));
								if(!sell) return;
						
								if(message.user.rub < sell.cost) return bot(`недостаточно денег`);
								else if(message.user.rub >= sell.cost)
								{
									message.user.rub -= sell.cost;
									message.user.car = sell.id;
							
									return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
								}
							});
		cmd.hear(/^(?:report|rep)\s([^]+)$/i, async (message, bot) => {
		if(message.isChat) return bot(`команда работает только в ЛС.`);
							
		vk.api.messages.send({ user_id: 401101039, forward_messages: message.id, message: `Игровой айди: ${message.user.uid}` }).then(() => {
			return bot(`ваше сообщение отправлено.`);
		}).catch((err) => {
		return bot(`укажите свой ID в файле /database/settings.json`);
	});
	});
	
	cmd.hear(/^(?:помощь|команды|меню)$/i, async (message, bot) => {
		await bot(`открыта команда "MENU"
		⠀⠀🌊 Основное:
		Статистика - информация об аккаунте
		Банк - сколько денег в банке
		Переехать [Los Santos | San Fierro | Las Venturas]
		✒ Ник [Имя_Фамилия]
			 
		 ⠀⠀👀 Развлекательное:
		🎰 Казино [ставка] Синий | Красный | Чёрный | Синий - испытать удачу в казино
		🔦 Сейф [случайные 2 цифры] 
		
		⠀⠀🔸 Магазин:
		🚗 Машины
		
		⠀⠀🔨 Работа:
		⛏ Копать шахту
		🚕 Таксовать
		👮‍♂ Работать полицейским | ФБР

		
		⠀⠀🧬 Семья:
		 🗿 Семья помощь

		 ⠀⠀🙋‍♂ Фракция:
		 📓 Фракция помощь

		 🆘 Report [фраза] - ошибки или пожелания`)});

		 cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {	
			message.user.tag = message.args[1];
			let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
			let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
			return bot(`${ggtext} ник! ${smilenick}`);
		});

		cmd.hear(/^(?:фр создать)\s(.*)$/i, async (message, bot) => {
			if(!message.args[1]) return bot(`введите название для семьи!`);
			let zaprets1 = message.args[1].toLowerCase();
			var zapret = /(🤵)/
			var sss = zapret.test(zaprets1) 
			if(zapret.test(zaprets1) == true){
			var check = true;
			return bot(`в названии есть запрещенные символы ${smileerror}`);
			} 
			if(message.args[1].length >= 7000) return bot(`максимальная длина названия семьи 7 символов`);
			let name = message.args[1];
			let fractionid = message.user.fractionid;
			if(message.user.rub < 50000000000) return bot(`создание фракции стоит 50.000.000.000$`);
			message.user.rub -= 50000000000;
			let fr = fractions.length
			
			if(fractions[fractionid]) return bot(`вы уже состоите во фракции!`);
			if(!fractions[fractionid]) { 
			fractions.push({
			id: fr,
			users: {},
			name: name,
			balance: 0,
			rating: 0,
			peoples: 1,
			open: false,
			reputation: 0,
			lvl: 0
			});
			message.user.fractions = fr;
			fractions[fr].users[message.user.uid] = {
			id: message.user.id,
			uid: message.user.uid,
			level: 3
			}
			 
			return bot(`фракция «${message.args[1]}» успешно создан!\nВведите «фракция помощь» чтобы посмотреть команды фракции!`);
}
});

cmd.hear(/^(?:фракция состав)$/i, async (message, bot) => {
	let fractionid = 

	message.user.fractionid;
	if(!fractions[fractionid]) return bot(`у вас нет семьи!
		❓ Для вступления введите «семья войти [ID]»`);
	
	let text = ``;
	let mp = ``;
	
	for(let id in fractions[fractionid].users) {
	let user = users[id];
	if(user.mention == true) {
	if(fractions[fractionid].users[id].level == 3) text += `⠀⠀ Лидер - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	if(fractions[fractionid].users[id].level == 2) text += `⠀⠀ Заместитель лидера - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	if(fractions[fractionid].users[id].level == 1) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	if(fractions[fractionid].users[id].level == 0) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	} else {
	if(fractions[fractionid].users[id].level == 3) text += `⠀⠀ Лидер - ${user.tag} (ID: ${user.uid})\n`;
	if(fractions[fractionid].users[id].level == 2) text += `⠀⠀ Заместитель лидера - ${user.tag} (ID: ${user.uid})\n`;
	if(fractions[fractionid].users[id].level == 1) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
	if(fractions[fractionid].users[id].level == 0) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
	};
	}
	
	if(fractions[fractionid].lvl == 0) { 
	mp += `5`;
	};
	if(fractions[fractionid].lvl == 1) {
	mp += `15`;
	};
	if(fractions[fractionid].lvl == 2) {
	mp += `25`;
	};
	if(fractions[fractionid].lvl == 3) {
	mp += `50`;
	};
	if(fractions[fractionid].lvl == 4) {
	mp += `100`;
	};
	
	return bot(`участники фракции «${fractions[fractionid].name}» [${fractions[fractionid].peoples}/${mp}]:
	${text}`);
	});

	cmd.hear(/^(?:фракция)\s(?:пополнить)\s(.*)$/i, async (message, bot) => {
		let fractionid = message.user.fractionid;
		if(!fractions[fractionid]) return bot(`у вас нет семьи!
			❓ Для вступления введите «семья войти [ID]»`);
		message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
		message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
		message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
		message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
		
		if(!Number(message.args[1])) return;
		message.args[1] = Math.floor(Number(message.args[1]));
		
		if(message.args[1] <= 0) return;
		
		if(message.args[1] > message.user.rub) return bot(`у вас нет данной суммы ${smileerror}`, {attachment:'market-185655451_3045142'});
		else if(message.args[1] <= message.user.balance)
		{
		message.user.rub -= message.args[1];
		fractions[fractionid].balance += message.args[1];
		
		return bot(`вы положили на счёт фракции ${utils.sp(message.args[1])}$`);
		}
		});
		
		cmd.hear(/^(?:фракция)\s(?:снять)\s(.*)$/i, async (message, bot) => {
		let fractionid = message.user.fractionid;
		if(!fractions[fractionid]) return bot(`у вас нет семьи!
			❓ Для вступления введите «семья войти [ID]»`);
		if(fractions[fractionid].users[message.user.uid].level < 3) return bot(`снимать деньги фракции может Заместитель лидера и выше!`);
		message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
		message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
		message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
		message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, fractions[fractionid].balance);
		
		if(!Number(message.args[1])) return;
		message.args[1] = Math.floor(Number(message.args[1]));
		
		if(message.args[1] <= 0) return;
		
		if(message.args[1] > fractions[fractionid].balance) return bot(`на балансе фракции нет данной суммы ${smileerror}`, {attachment:'market-185655451_3045142'});
		else if(message.args[1] <= fractions[fractionid].balance)
		{
		message.user.balance += message.args[1];
		fractions[fractionid].balance -= message.args[1];
		
		return bot(`вы сняли ${utils.sp(message.args[1])}$ с баланса фракции
		
		Напомним, передача средств через фракции строго запрещена и карается блокировкой!`);
		}
		});
		
		cmd.hear(/^(?:фракция повысить)\s([0-9]+)$/i,
		 
		async (message, bot) => {
		let fractionidd = message.user.fractionid;
		if(!fractions[fractionidd]) return bot(`у вас нет фракции!
			❓ Для вступления введите «семья войти [ID]»`);
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);
		
		let fractionid = user.fractionid;
		if(!fractions[fractionid]) return bot(`этот человек не состоит в фракции`);
		if(fractions[fractionid].users[message.user.uid].level < 3) return bot(`повышать может только лидер фракции!`);
		
		
		if(!fractions[fractionid]) return bot(`этот человек не состоит в фракции!`);
		if(user.fractionid != message.user.fractionid) return bot(`игрок состоит в другом фракции!`);
		if(fractions[fractionid].users[user.uid].level >= 2) return bot(`нельзя повысить игрока до лидера!`);
		fractions[fractionid].users[user.uid].level += 1;
		return bot(`игрок ${user.tag} был повышен в семье!`); 
		});
		
		cmd.hear(/^(?:фракция понизить)\s([0-9]+)$/i, async (message, bot) => {
		let fractionsidd = message.user.clanid;
		if(!fractuions[fractionsidd]) return bot(`у вас нет фракции!
			❓ Для вступления введите «семья войти [ID]»`);
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);
		
		let fractionid = user.fractionid;
		if(!fractions[fractionid]) return bot(`этот человек не состоит в фракции`);
		if(fractions[fractionid].users[message.user.uid].level < 3) return bot(`понижать может только создатель фракции!`);
		
		
		if(!fractions[fractionid]) return bot(`этот человек не состоит в фракции!`);
		if(user.fractionid != message.user.fractionid) return bot(`игрок состоит в другом фракции!`);
		if(cfractions[fractionid].users[user.uid].level <= 0) return bot(`нельзя понизить игрока ниже участника!`);
		fractions[fractionid].users[user.uid].level -= 1;
		return bot(`игрок ${user.tag} был понижен в фракции!`); 
		});
		
		cmd.hear(/^(?:фракция кик)\s([0-9]+)$/i, async (message, bot) => {
		let fractionidd = message.user.clanid;
		if(!fractions[fractionidd]) return bot(`у вас нет фракции!
			❓ Для вступления введите «фракция войти [ID]»`);
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);
		
		let fractionid = user.fractionid;
		if(!fractions[fractionid]) return bot(`этот человек не состоит в фракции`);
		if(fractions[fractionid].users[message.user.uid].level < 3) return bot(`кикать может только лидер фракции!`);
		
		
		if(!fractions[fractionid]) return bot(`этот человек не состоит в фракции!`);
		if(user.fractionid != message.user.fractionid) return bot(`игрок состоит в другом фракции!`);
		fractions[fractionid].peoples -= 1;
		user.fractionid = false;
		delete fractions[fractionid].users[user.uid];
		return bot(`игрок ${user.tag} был кикнут из фракции!`); 
		});

		cmd.hear(/^(?:фракция)$/i, async (message, bot) => {
			let fractionid = message.user.fractionid;
			if(!fractions[fractionid]) return bot(`у вас нет фракции!
			❓ Для вступления введите обратитесь к лидеру`);
			
			let text = ``;
			let tipe = ``;
			let lv = ``;
			let mp = ``;
			let num = 10;
			
			for(let id in fractions[fractionid].users) {
			if(!num < 1) {
			num -= 1;
			let user = users[id];
			if(user.mention == true) {
			if(fractions[fractionid].users[id].level == 3) text += `👑 Лидер фракции - @id${user.id} (${user.tag})\n`;
			} else {
			if(fractions[fractionid].users[id].level == 3) text += `👑 Лидер фракции - @id${user.id} (${user.tag})\n`;
			};
			};
			}
			
			if(fractions[fractionid].lvl == 0) { 
			lv += `1`;
			mp += `5`;
			cost = `🆕 Улучшение фракции до 2 уровня стоит 100.000.000.000$`;
			};
			if(fractions[fractionid].lvl == 1) {
			lv += `2`;
			mp += `15`;
			cost = `🆕 Улучшение фракции до 3 уровня стоит 500.000.000.000$`;
			};
			if(fractions[fractionid].lvl == 2) {
			lv += `3`;
			mp += `25`;
			cost = `🆕 Улучшение фракции до 4 уровня стоит 2.500.000.000.000$`;
			};
			if(fractions[fractionid].lvl == 3) {
			lv += `4`;
			mp += `50`;
			cost = `🆒 Фракция улучшена максимально.`;
			};
			
			return bot(`информация о фракции «${fractions[fractionid].name}»:
			🛡 Уровень фракции: ${lv}
			👑 Рейтинг фракции для топа: ${utils.sp(fractions[fractionid].rating)}
			${tipe}
			💰 Баланс фракции: ${utils.sp(fractions[fractionid].balance)}$
			💎 Репутация фракции: ${fractions[fractionid].reputation}
			
			${cost}
			👥 Участников: ${utils.sp(fractions[fractionid].peoples)}/${mp}
			${text}
			`);
			});

			cmd.hear(/^(?:фракция улучшить)$/i, async (message, bot) => {
				let fractionid = message.user.fractionid;
				if(!fractions[fractionid]) return bot(`у вас нет фракции!
				❓ Для вступления введите обратитесь к лидеру`);
				
				let text = ``;
				let tipe = ``;
				let lv = ``;
				let mp = ``;
				let num = 10;
				
			if(fractions[fractionid].balance < 100000000000)
			{
				return bot(`недостаточно средств во фракции`)
			}

			fractions[fractionid].balance -= 100000000000
			fractions[fractionid].lvl += 1
			await bot(`фракция улучшена`)});

			cmd.hear(/^(?:фракция покинуть)$/i, async (message, bot) => {
				let fractionid = message.user.fractionid;
				if(!fractions[fractionid]) return bot(`у вас нет семьи!
					❓ Для вступления обратитесь к лидеру фракции`);
				fractions[fractionid].peoples -=
				 
				1;
				message.user.fractionid = false;
				delete fractions[fractionid].users[message.user.uid];
				return bot(`вы покинули фракцию!`)});

				cmd.hear(/^(?:фракция войти|фракция зайти|фракция вход|фракция присоединиться|фракция присоедениться|семья)\s([0-9]+)$/i, async (message, bot) => {
					let fractionid = message.user.fractionid;
					if(fractionid) return bot(`вы уже состоите в фракции!`);
					if(!message.args[1]) return bot(`вы не указали ID фракции!`);
					let idfraction = message.args[1];
					
					if(!fractions[idfraction]) return bot(`данного фракция не существует! Укажите правильный ID фракции.`);
					if(fractions[idfraction].delete == true) return bot(`данный фракция удалён.`);
					if(fractions[idfraction].lvl == 0) { 
					if(fractions[idfraction].peoples >= 5) return bot(`фракция переполнена!`);
					};
					if(fractions[idfraction].lvl == 1) { 
					if(fractions[idfraction].peoples >= 15) return bot(`фракция переполнен!`);
					};
					if(fractions[idfraction].lvl == 2) { 
					if(fractions[idfraction].peoples >= 25) return bot(`фракция переполнена!`);
					};
					if(fractions[idfraction].lvl == 3) { 
					if(fractions[idfraction].peoples >= 50) return bot(`фракция переполнена!`);
					};
					if(fractions[idfraction].lvl == 4) { 
					if(cfractions[idfraction].peoples >= 100) return bot(`фракция переполнена!`);
					};
					if(fractions[idfraction].open == false) return bot(`🔒 фракция закрыта, доступ по приглашениям`);
					if(fractions[idfraction].open == true){
					fractions[idfraction].peoples += 1;
					message.user.fractionid = Number(message.args[1]);
					if(!fractions[idfraction].users[message.user]) {
					fractions[idfraction].users[message.user.uid] = {
					id: message.user.id,
					uid: message.user.uid,
					level: 1
					}
					}
					return bot(`вы вошли во фракцию «${fractions[idfraction].name}»!\nВведите "фракция помощь" чтобы посмотреть команды семьи!`);
					}
					
					});
	cmd.hear(/^(?:фракция помощь)$/i, async (message, bot) => {
		message.send(`${message.user.tag}, информация о фракциях ниже:
		1. Фракция - информация о фракции
		2. Фракция состав - информация о скольки людей состоят во фракции
		3. Фракция пополнить - пополнить счёт фракции
		4. Фракция снять - снять со счёта деньги
		5. Фракция покинуть - выйти с фракции.`)})
	
cmd.hear(/^(?:работать) (полицейским|фбр)$/i, async (message, bot) => {
	let fractionid = message.user.fractionid;

	if(!fractions[fractionid])
	{
		return bot(`вы не состоите во фракции фбр или полиции! ${smileerror}`)
	}

	if(fractions[fractionid])
	{
		let random = getRandomInt(1,2)
		if(random === 1)
		{
			return bot(`не повезло преступник удрал ${smileerror}`)
		}
		
		if(random === 2)
		{
			message.user.rub += 10000
			fractions[fractionid].reputation += 1
			return bot(`ого, повезло! Ты поймал преступника и получил 10.000вирт.
			На руках: ${utils.sp(message.user.rub)}вирт. ${smilesuccess}
			Репутация фракции увеличилась!`)
		}
	}
	});

	cmd.hear(/^(?:топ)$/i, async (message, bot) => {
		let top = [];
	
		users.map(x=> {
			top.push({ rub: x.rub, exp: x.exp, tag: x.tag, id: x.id, mention: x.mention });
		});
	
		top.sort((a, b) => {
			return b.rating - a.rating;
		});
	
		let text = ``;
		const find = () => {
			let pos = 1000;
	
			for (let i = 0; i < top.length; i++)
			{
				if(top[i].id === message.senderId) return pos = i;
			}
	
			return pos;
		}
	
		for (let i = 0; i < 10; i++)
		{
			if(!top[i]) return;
			const user = top[i];
	
			text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.exp)} | $${utils.rn(user.rub)}
			`;
		}
	
		return bot(`топ игроков:
			${text}
	—————————————————
	${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.exp)} | $${utils.rn(message.user.rub)}`);
	});

	cmd.hear(/^(?:таксовать)$/i, async (message, bot) => { 	
		taxicash = utils.random(300, 1000);
		message.user.rub += taxicash;	
		await bot(`вы заработали за перевозку клиента: ${utils.sp(taxicash)}вирт`);
	});

	cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
		if(message.args[1] < 10 || message.args[1] >= 100) return;
	
		const int = utils.random(10, 99);
		message.args[1] = Number(message.args[1]);
	
		if(int === message.args[1])
		{
			message.user.rub += 10000000000;
			return bot(`офигеть тебе повезло! Вы угадали число.
			💲 Вам начислено 10.000.000.000вирт`);
		} else if(int !== message.args[1])
		{
			return bot(`вы не угадали число. Вам выпало число "${int}"
			🎉 Не отчаивайтесь, количество попыток неограниченно.
			
			Если вы угадаете код, то вы получите 10.000.000.000вирт`);
		}
	});