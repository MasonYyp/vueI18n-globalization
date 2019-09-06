
import zh from "../language/messages_zh.js";
import en from "../language/messages_en.js";

/**
 * 设置语言
 * @param {Object} language 语言
 */
function set_language(language){
	// 保存语言设置
	sessionStorage.setItem("language", language);
	// 切换语言
	i18n.locale = language;
}

/**
 * 获得语言
 * Return 返回语言
 */
function get_language(){
	return sessionStorage.getItem("language");
}

/**
 * 获得VueI18n实例
 * Return 返回i18n实例和语言编码
 */
function get_i18n(){
	var messages_zh = zh.messages;
	var messages_en = en.messages;
	
	// 添加所有的语言
	var i18n_messages = {	
		zh:messages_zh,
		en:messages_en
	}
	
	// 设置语言
	var temp_locale = get_language();
	if(temp_locale == null){
		// 默认中文
		temp_locale = 'zh';
	}
	var temp_locale_code = get_language_code(temp_locale);
	
	// 实例化i18n
	var temp_i18n = new VueI18n({
	  locale: temp_locale, // 设置语言
	  messages: i18n_messages // 设置数据
	});
	
	return {"i18n":temp_i18n, "i18n_locale_code":temp_locale_code};
}

/**
 * 获得语言编码
 * @param {Object} temp_locale 表示自定义的语言符号
 * Return 返回语言编码
 */
function get_language_code(temp_locale){
	var temp_locale_code = 1;
	switch(temp_locale){
		case "zh":{
			temp_locale_code = 1;
			break;
		}
		case "en":{
			temp_locale_code = 2;
			break;
		}
	}
	return temp_locale_code;
}

/**
 * 修改语言
 * @param {Object} temp_local_code 表示语言的编码
 */
function change_language(temp_local_code){
	var temp_local = "zh";
	switch(temp_local_code){
		case 1:{
			temp_local = "zh";
			break;
		}
		case 2:{
			temp_local = "en";
			break;
		}
	}
	
	// 设置语言
	set_language(temp_local);
}

// 获得i18n实例和语言编码
var global_temp_i18n = get_i18n();
var i18n = global_temp_i18n.i18n;
var locale_code = global_temp_i18n.i18n_locale_code;
// 设置语言种类的个数
var language_number = 2;


export default {i18n, locale_code, change_language, language_number}
