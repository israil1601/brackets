module.exports = function check(str, bracketsConfig) {
	var changed = false
	for (var i = 0; i < bracketsConfig.length; i++) {
		if (~str.indexOf(bracketsConfig[i].join(''))) {
			str = str.replace(bracketsConfig[i].join(''), '')
			changed = true
		}
	}
	if (str && changed) {
		return check(str, bracketsConfig)
	}
	else { return str ? false : true }
}
