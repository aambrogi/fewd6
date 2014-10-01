/*$(document).ready(function(){
	$('button#light_switch').click(function(){
		$('body').toggleClass('dark');
	});
});*/

var status = 'on';

function lightSwitch() {
	if (status === 'on') {
		document.body.className = 'dark';
		status = 'off';

	} else {
		document.body.className = '';
        status = 'on';
	}
}


document.getElementById('light_switch').onclick = lightSwitch;