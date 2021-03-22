gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDPlayerObjects1= [];
gdjs.Main_32MenuCode.GDPlayerObjects2= [];
gdjs.Main_32MenuCode.GDGunObjects1= [];
gdjs.Main_32MenuCode.GDGunObjects2= [];
gdjs.Main_32MenuCode.GDSwordObjects1= [];
gdjs.Main_32MenuCode.GDSwordObjects2= [];
gdjs.Main_32MenuCode.GDBulletObjects1= [];
gdjs.Main_32MenuCode.GDBulletObjects2= [];
gdjs.Main_32MenuCode.GDHealthBarBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDHealthBarBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDHealthBarObjects1= [];
gdjs.Main_32MenuCode.GDHealthBarObjects2= [];
gdjs.Main_32MenuCode.GDHealthBarValueObjects1= [];
gdjs.Main_32MenuCode.GDHealthBarValueObjects2= [];
gdjs.Main_32MenuCode.GDCurrencyTextObjects1= [];
gdjs.Main_32MenuCode.GDCurrencyTextObjects2= [];
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDInventorySlotObjects1= [];
gdjs.Main_32MenuCode.GDInventorySlotObjects2= [];
gdjs.Main_32MenuCode.GDInventoryTrashSlotObjects1= [];
gdjs.Main_32MenuCode.GDInventoryTrashSlotObjects2= [];
gdjs.Main_32MenuCode.GDInventoryMovingSlotObjects1= [];
gdjs.Main_32MenuCode.GDInventoryMovingSlotObjects2= [];
gdjs.Main_32MenuCode.GDHotBarSelectionObjects1= [];
gdjs.Main_32MenuCode.GDHotBarSelectionObjects2= [];
gdjs.Main_32MenuCode.GDInventoryQuantityObjects1= [];
gdjs.Main_32MenuCode.GDInventoryQuantityObjects2= [];
gdjs.Main_32MenuCode.GDChangeSceneInteractionObjects1= [];
gdjs.Main_32MenuCode.GDChangeSceneInteractionObjects2= [];
gdjs.Main_32MenuCode.GDSolidObjectObjects1= [];
gdjs.Main_32MenuCode.GDSolidObjectObjects2= [];
gdjs.Main_32MenuCode.GDStatsBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDStatsBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDStatsTextObjects1= [];
gdjs.Main_32MenuCode.GDStatsTextObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDOptionsButtonObjects1= [];
gdjs.Main_32MenuCode.GDOptionsButtonObjects2= [];
gdjs.Main_32MenuCode.GDHowToPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDHowToPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDQuitButtonObjects1= [];
gdjs.Main_32MenuCode.GDQuitButtonObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getChild("Health")) <= 0;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("Health").setNumber(100);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsButtonObjects1Objects = Hashtable.newFrom({"OptionsButton": gdjs.Main_32MenuCode.GDOptionsButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDHowToPlayButtonObjects1Objects = Hashtable.newFrom({"HowToPlayButton": gdjs.Main_32MenuCode.GDHowToPlayButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.Main_32MenuCode.GDQuitButtonObjects1});gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10807020);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Farm", false);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OptionsButton"), gdjs.Main_32MenuCode.GDOptionsButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10809348);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowToPlayButton"), gdjs.Main_32MenuCode.GDHowToPlayButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDHowToPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10810996);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "How To Play Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Main_32MenuCode.GDQuitButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10811244);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 0));
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Ludum Dare 38 - Track 1.ogg", 0, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)), 1);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Main_32MenuCode.GDGunObjects1.length = 0;
gdjs.Main_32MenuCode.GDGunObjects2.length = 0;
gdjs.Main_32MenuCode.GDSwordObjects1.length = 0;
gdjs.Main_32MenuCode.GDSwordObjects2.length = 0;
gdjs.Main_32MenuCode.GDBulletObjects1.length = 0;
gdjs.Main_32MenuCode.GDBulletObjects2.length = 0;
gdjs.Main_32MenuCode.GDHealthBarBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDHealthBarBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDHealthBarObjects1.length = 0;
gdjs.Main_32MenuCode.GDHealthBarObjects2.length = 0;
gdjs.Main_32MenuCode.GDHealthBarValueObjects1.length = 0;
gdjs.Main_32MenuCode.GDHealthBarValueObjects2.length = 0;
gdjs.Main_32MenuCode.GDCurrencyTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDCurrencyTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventorySlotObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventorySlotObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryTrashSlotObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryTrashSlotObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryMovingSlotObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryMovingSlotObjects2.length = 0;
gdjs.Main_32MenuCode.GDHotBarSelectionObjects1.length = 0;
gdjs.Main_32MenuCode.GDHotBarSelectionObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryQuantityObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryQuantityObjects2.length = 0;
gdjs.Main_32MenuCode.GDChangeSceneInteractionObjects1.length = 0;
gdjs.Main_32MenuCode.GDChangeSceneInteractionObjects2.length = 0;
gdjs.Main_32MenuCode.GDSolidObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDSolidObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDStatsBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDStatsBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDStatsTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDStatsTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDHowToPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDHowToPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
