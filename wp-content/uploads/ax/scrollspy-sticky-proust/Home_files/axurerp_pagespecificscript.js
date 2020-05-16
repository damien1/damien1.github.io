
for(var i = 0; i < 42; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u34','','none',500);

}

});

widgetIdToShowFunction['u34'] = function() {
var e = windowEvent;

if (true) {
function waitu39822f6f95cd4f8d838308eeb7ab9f001() {

	SetPanelVisibility('u34','hidden','none',500);
function waitufc38e9554a774111b3d6849d2273e33a1() {

	SetPanelVisibility('u34','','none',500);
}
setTimeout(waitufc38e9554a774111b3d6849d2273e33a1, 100);
}
setTimeout(waitu39822f6f95cd4f8d838308eeb7ab9f001, 100);

}

if (IsOver(GetWidgetRectangles('u11'), GetWidgetRectangles('u2'))) {

SetWidgetSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	MoveWidgetTo('u13', GetNum('0'), GetNum('200'),'none',500);

}

if (IsOver(GetWidgetRectangles('u11'), GetWidgetRectangles('u33'))) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	MoveWidgetTo('u14', GetNum('0'), GetNum('50'),'none',500);

}
else
if (IsOver(GetWidgetRectangles('u11'), GetWidgetRectangles('u38'))) {

SetWidgetSelected('u27');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u29');
SetWidgetSelected('u19');
SetWidgetNotSelected('u21');
SetWidgetNotSelected('u17');
}
else
if (IsOver(GetWidgetRectangles('u11'), GetWidgetRectangles('u37'))) {

SetWidgetSelected('u29');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u19');
SetWidgetSelected('u21');
SetWidgetNotSelected('u17');
}

}
gv_vAlignTable['u20'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	ScrollToWidget('u31', false,true,'none',500);

}
});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';document.getElementById('u27_img').tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	MoveWidgetTo('u13', GetNum('0'), GetNum('50'),'none',500);

	ScrollToWidget('u32', false,true,'none',500);

}
});
gv_vAlignTable['u28'] = 'center';document.getElementById('u29_img').tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	ScrollToWidget('u31', false,true,'none',500);

	MoveWidgetTo('u13', GetNum('0'), GetNum('50'),'none',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u5'] = 'center';HookHover('u6', false);
gv_vAlignTable['u7'] = 'center';document.getElementById('u8_img').tabIndex = 0;
HookHover('u8', false);

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	ScrollToWidget('u2', false,true,'none',500);

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	ScrollToWidget('u32', false,true,'none',500);

}
});
