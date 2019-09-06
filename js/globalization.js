// 导入配置文件
import configure from "../js/language/language_configure.js";

// 执行主函数
main()

function main(){
	globalization();
}

// 国际化
function globalization(){
	
	var i18n = configure.i18n;
		
	new Vue({
		el:"#nav",
		i18n: i18n,
		data(){
			return{
				count_local_code:configure.locale_code
			}
		},
		methods:{
			change_language(){
				if(this.count_local_code == configure.language_number){
					this.count_local_code = 1;
				}else{
					this.count_local_code = this.count_local_code + 1;
				}
				configure.change_language(this.count_local_code);				
			}
		}
	});
	
	new Vue({ i18n }).$mount("#foot");
}
