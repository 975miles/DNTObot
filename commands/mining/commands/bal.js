var requireDir = require('require-dir');
var functions = requireDir("../../../functions", {recurse: true});

module.exports = {
	"d":"Shows your balance.",
	"a":[],
	"g":"e",
	"f":function (msg, bot, args, bal) {
		if (args[0] == undefined) {
			args[0] = msg.author.id;
		}
		args[0] = args[0].replace(/\D/g,'');
		if (bal.mining[args[0]] == undefined) {
			msg.channel.send("Please @mention the user.");
		} else {
			var output = "Balances:";
			for (var mineral in bal.mining[args[0]].minerals) {
				output += "\n" + mineral + ": `" + bal.mining[args[0]].minerals[mineral] + "`";
			}
			output += "\n\nmoney: " + "`" + bal.mining[args[0]].money + "`";
			msg.channel.send(output);
		}
		return bal;
	}
}