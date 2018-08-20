/* $(document).ready(function(){
	$(".ToggleFirstElement").click(function(){
			if($(".content2").show().length>0){
				$(".content2").hide(400);
					
			}
			 $(".content1").toggle(450);
		
		});
		
	$(".ToggleSecondElement").click(function(){
		
		
			if($(".content1").show().length>0){
				$(".content1").hide(400);
					
			}	
			$(".content2").toggle(450);
		});
		
	$(".ToggleBothElement").click(function(){
			
			 $(".content1, .content2").toggle();
		
		});
			
});	 */

$(document).ready(function(){
	$(".ToggleFirstElement").click(function(){
			if($(".content2").length==true){
				$(".content2").hide(300);
					
			}
			 $(".content1").toggle(450);
		
		});
		
	$(".ToggleSecondElement").click(function(){
		
		
			if($(".content1").length==true){
				$(".content1").hide(300);
					
			}	
			$(".content2").toggle(450);
		});
		
	$(".ToggleBothElement").click(function(){
			
			 $(".content1, .content2").toggle(400);
		
		});
			
});

