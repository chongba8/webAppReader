$.get('/ajax/index',function(d){
	var screenWidth=$(window).width();
	if(screenWidth<320){screenWidth=320;}
	var width=$('.swip-tab-2 a:first-child').width();
	new Vue({
		el:'#app',

		data:{
			screenWidth:screenWidth,
			top:d.items[0].data.data,
			hot:d.items[1].data.data,
			recommend:d.items[2].data.data,
			female:d.items[3].data.data,
			male:d.items[4].data.data,
			free:d.items[5].data.data,
			topic:d.items[6].data.data,
			position:0,
			header_position:0,
			tab_1_class:'Swipe-tab-on',
			tab_2_calss:'',

		},

		methods:{
			tabSwitch:function(pos){
				if(pos==0){
					this.position=0;
					this.header_position=0;
					this.tab_1_class='Swipe-tab-on';
					this.tab_2_calss='';
				}else{
					this.position=-screenWidth;
					this.header_position=width;
					this.tab_2_class='Swipe-tab-on';
					this.tab_1_calss='';
				}
			}
		}
	})

},'json')