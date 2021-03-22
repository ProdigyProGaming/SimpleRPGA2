gdjs.Options_32MenuCode = {};
gdjs.Options_32MenuCode.GDPlayerObjects1= [];
gdjs.Options_32MenuCode.GDPlayerObjects2= [];
gdjs.Options_32MenuCode.GDGunObjects1= [];
gdjs.Options_32MenuCode.GDGunObjects2= [];
gdjs.Options_32MenuCode.GDSwordObjects1= [];
gdjs.Options_32MenuCode.GDSwordObjects2= [];
gdjs.Options_32MenuCode.GDBulletObjects1= [];
gdjs.Options_32MenuCode.GDBulletObjects2= [];
gdjs.Options_32MenuCode.GDHealthBarBackgroundObjects1= [];
gdjs.Options_32MenuCode.GDHealthBarBackgroundObjects2= [];
gdjs.Options_32MenuCode.GDHealthBarObjects1= [];
gdjs.Options_32MenuCode.GDHealthBarObjects2= [];
gdjs.Options_32MenuCode.GDHealthBarValueObjects1= [];
gdjs.Options_32MenuCode.GDHealthBarValueObjects2= [];
gdjs.Options_32MenuCode.GDCurrencyTextObjects1= [];
gdjs.Options_32MenuCode.GDCurrencyTextObjects2= [];
gdjs.Options_32MenuCode.GDInventoryBackgroundObjects1= [];
gdjs.Options_32MenuCode.GDInventoryBackgroundObjects2= [];
gdjs.Options_32MenuCode.GDInventorySlotObjects1= [];
gdjs.Options_32MenuCode.GDInventorySlotObjects2= [];
gdjs.Options_32MenuCode.GDInventoryTrashSlotObjects1= [];
gdjs.Options_32MenuCode.GDInventoryTrashSlotObjects2= [];
gdjs.Options_32MenuCode.GDInventoryMovingSlotObjects1= [];
gdjs.Options_32MenuCode.GDInventoryMovingSlotObjects2= [];
gdjs.Options_32MenuCode.GDHotBarSelectionObjects1= [];
gdjs.Options_32MenuCode.GDHotBarSelectionObjects2= [];
gdjs.Options_32MenuCode.GDInventoryQuantityObjects1= [];
gdjs.Options_32MenuCode.GDInventoryQuantityObjects2= [];
gdjs.Options_32MenuCode.GDChangeSceneInteractionObjects1= [];
gdjs.Options_32MenuCode.GDChangeSceneInteractionObjects2= [];
gdjs.Options_32MenuCode.GDSolidObjectObjects1= [];
gdjs.Options_32MenuCode.GDSolidObjectObjects2= [];
gdjs.Options_32MenuCode.GDStatsBackgroundObjects1= [];
gdjs.Options_32MenuCode.GDStatsBackgroundObjects2= [];
gdjs.Options_32MenuCode.GDStatsTextObjects1= [];
gdjs.Options_32MenuCode.GDStatsTextObjects2= [];
gdjs.Options_32MenuCode.GDVolumeValueTextObjects1= [];
gdjs.Options_32MenuCode.GDVolumeValueTextObjects2= [];
gdjs.Options_32MenuCode.GDVolumeControlObjects1= [];
gdjs.Options_32MenuCode.GDVolumeControlObjects2= [];
gdjs.Options_32MenuCode.GDVolumeNameTextObjects1= [];
gdjs.Options_32MenuCode.GDVolumeNameTextObjects2= [];
gdjs.Options_32MenuCode.GDBackButtonObjects1= [];
gdjs.Options_32MenuCode.GDBackButtonObjects2= [];
gdjs.Options_32MenuCode.GDEnableCheatNameTextObjects1= [];
gdjs.Options_32MenuCode.GDEnableCheatNameTextObjects2= [];
gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1= [];
gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects2= [];
gdjs.Options_32MenuCode.GDViewCheatsButtonObjects1= [];
gdjs.Options_32MenuCode.GDViewCheatsButtonObjects2= [];

gdjs.Options_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Options_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Options_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Options_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Options_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Options_32MenuCode.condition4IsTrue_0 = {val:false};
gdjs.Options_32MenuCode.condition5IsTrue_0 = {val:false};
gdjs.Options_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Options_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Options_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Options_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Options_32MenuCode.condition3IsTrue_1 = {val:false};
gdjs.Options_32MenuCode.condition4IsTrue_1 = {val:false};
gdjs.Options_32MenuCode.condition5IsTrue_1 = {val:false};


gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDVolumeControlObjects1Objects = Hashtable.newFrom({"VolumeControl": gdjs.Options_32MenuCode.GDVolumeControlObjects1});gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDVolumeControlObjects1Objects = Hashtable.newFrom({"VolumeControl": gdjs.Options_32MenuCode.GDVolumeControlObjects1});gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDCheatsEnabledToggleObjects1Objects = Hashtable.newFrom({"CheatsEnabledToggle": gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1});gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDViewCheatsButtonObjects1Objects = Hashtable.newFrom({"ViewCheatsButton": gdjs.Options_32MenuCode.GDViewCheatsButtonObjects1});gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Options_32MenuCode.GDBackButtonObjects1});gdjs.Options_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Options_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Options_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Options_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CheatsEnabledToggle"), gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1);
gdjs.copyArray(runtimeScene.getObjects("VolumeValueText"), gdjs.Options_32MenuCode.GDVolumeValueTextObjects1);
{for(var i = 0, len = gdjs.Options_32MenuCode.GDVolumeValueTextObjects1.length ;i < len;++i) {
    gdjs.Options_32MenuCode.GDVolumeValueTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(18)));
}
}{for(var i = 0, len = gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1.length ;i < len;++i) {
    gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.Options_32MenuCode.GDVolumeControlObjects1);

gdjs.Options_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition2IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition3IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition4IsTrue_0.val = false;
{
gdjs.Options_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDVolumeControlObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Options_32MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Options_32MenuCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.Options_32MenuCode.GDVolumeControlObjects1[i].getVariableString(gdjs.Options_32MenuCode.GDVolumeControlObjects1[i].getVariables().getFromIndex(0)) == "Plus" ) {
        gdjs.Options_32MenuCode.condition2IsTrue_0.val = true;
        gdjs.Options_32MenuCode.GDVolumeControlObjects1[k] = gdjs.Options_32MenuCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.Options_32MenuCode.GDVolumeControlObjects1.length = k;}if ( gdjs.Options_32MenuCode.condition2IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)) < 100;
}if ( gdjs.Options_32MenuCode.condition3IsTrue_0.val ) {
{
{gdjs.Options_32MenuCode.conditionTrue_1 = gdjs.Options_32MenuCode.condition4IsTrue_0;
gdjs.Options_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10797068);
}
}}
}
}
}
if (gdjs.Options_32MenuCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeValueText"), gdjs.Options_32MenuCode.GDVolumeValueTextObjects1);
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, gdjs.evtTools.sound.getSoundOnChannelVolume(runtimeScene, 0) + (5));
}{runtimeScene.getGame().getVariables().getFromIndex(18).add(5);
}{for(var i = 0, len = gdjs.Options_32MenuCode.GDVolumeValueTextObjects1.length ;i < len;++i) {
    gdjs.Options_32MenuCode.GDVolumeValueTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(18)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.Options_32MenuCode.GDVolumeControlObjects1);

gdjs.Options_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition2IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition3IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition4IsTrue_0.val = false;
{
gdjs.Options_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDVolumeControlObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Options_32MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Options_32MenuCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.Options_32MenuCode.GDVolumeControlObjects1[i].getVariableString(gdjs.Options_32MenuCode.GDVolumeControlObjects1[i].getVariables().getFromIndex(0)) == "Minus" ) {
        gdjs.Options_32MenuCode.condition2IsTrue_0.val = true;
        gdjs.Options_32MenuCode.GDVolumeControlObjects1[k] = gdjs.Options_32MenuCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.Options_32MenuCode.GDVolumeControlObjects1.length = k;}if ( gdjs.Options_32MenuCode.condition2IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)) > 0;
}if ( gdjs.Options_32MenuCode.condition3IsTrue_0.val ) {
{
{gdjs.Options_32MenuCode.conditionTrue_1 = gdjs.Options_32MenuCode.condition4IsTrue_0;
gdjs.Options_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10793812);
}
}}
}
}
}
if (gdjs.Options_32MenuCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeValueText"), gdjs.Options_32MenuCode.GDVolumeValueTextObjects1);
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, gdjs.evtTools.sound.getSoundOnChannelVolume(runtimeScene, 0) - (5));
}{runtimeScene.getGame().getVariables().getFromIndex(18).sub(5);
}{for(var i = 0, len = gdjs.Options_32MenuCode.GDVolumeValueTextObjects1.length ;i < len;++i) {
    gdjs.Options_32MenuCode.GDVolumeValueTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(18)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheatsEnabledToggle"), gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1);

gdjs.Options_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Options_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDCheatsEnabledToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Options_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Options_32MenuCode.conditionTrue_1 = gdjs.Options_32MenuCode.condition2IsTrue_0;
gdjs.Options_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10838876);
}
}}
}
if (gdjs.Options_32MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)));
}{for(var i = 0, len = gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1.length ;i < len;++i) {
    gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ViewCheatsButton"), gdjs.Options_32MenuCode.GDViewCheatsButtonObjects1);

gdjs.Options_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition2IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition3IsTrue_0.val = false;
{
gdjs.Options_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDViewCheatsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Options_32MenuCode.condition1IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == 1;
}if ( gdjs.Options_32MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.Options_32MenuCode.conditionTrue_1 = gdjs.Options_32MenuCode.condition3IsTrue_0;
gdjs.Options_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10840348);
}
}}
}
}
if (gdjs.Options_32MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cheats Menu");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Options_32MenuCode.GDBackButtonObjects1);

gdjs.Options_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Options_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Options_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32MenuCode.mapOfGDgdjs_46Options_9532MenuCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Options_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Options_32MenuCode.conditionTrue_1 = gdjs.Options_32MenuCode.condition2IsTrue_0;
gdjs.Options_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10841660);
}
}}
}
if (gdjs.Options_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.Options_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Options_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Options_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Options_32MenuCode.GDGunObjects1.length = 0;
gdjs.Options_32MenuCode.GDGunObjects2.length = 0;
gdjs.Options_32MenuCode.GDSwordObjects1.length = 0;
gdjs.Options_32MenuCode.GDSwordObjects2.length = 0;
gdjs.Options_32MenuCode.GDBulletObjects1.length = 0;
gdjs.Options_32MenuCode.GDBulletObjects2.length = 0;
gdjs.Options_32MenuCode.GDHealthBarBackgroundObjects1.length = 0;
gdjs.Options_32MenuCode.GDHealthBarBackgroundObjects2.length = 0;
gdjs.Options_32MenuCode.GDHealthBarObjects1.length = 0;
gdjs.Options_32MenuCode.GDHealthBarObjects2.length = 0;
gdjs.Options_32MenuCode.GDHealthBarValueObjects1.length = 0;
gdjs.Options_32MenuCode.GDHealthBarValueObjects2.length = 0;
gdjs.Options_32MenuCode.GDCurrencyTextObjects1.length = 0;
gdjs.Options_32MenuCode.GDCurrencyTextObjects2.length = 0;
gdjs.Options_32MenuCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Options_32MenuCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Options_32MenuCode.GDInventorySlotObjects1.length = 0;
gdjs.Options_32MenuCode.GDInventorySlotObjects2.length = 0;
gdjs.Options_32MenuCode.GDInventoryTrashSlotObjects1.length = 0;
gdjs.Options_32MenuCode.GDInventoryTrashSlotObjects2.length = 0;
gdjs.Options_32MenuCode.GDInventoryMovingSlotObjects1.length = 0;
gdjs.Options_32MenuCode.GDInventoryMovingSlotObjects2.length = 0;
gdjs.Options_32MenuCode.GDHotBarSelectionObjects1.length = 0;
gdjs.Options_32MenuCode.GDHotBarSelectionObjects2.length = 0;
gdjs.Options_32MenuCode.GDInventoryQuantityObjects1.length = 0;
gdjs.Options_32MenuCode.GDInventoryQuantityObjects2.length = 0;
gdjs.Options_32MenuCode.GDChangeSceneInteractionObjects1.length = 0;
gdjs.Options_32MenuCode.GDChangeSceneInteractionObjects2.length = 0;
gdjs.Options_32MenuCode.GDSolidObjectObjects1.length = 0;
gdjs.Options_32MenuCode.GDSolidObjectObjects2.length = 0;
gdjs.Options_32MenuCode.GDStatsBackgroundObjects1.length = 0;
gdjs.Options_32MenuCode.GDStatsBackgroundObjects2.length = 0;
gdjs.Options_32MenuCode.GDStatsTextObjects1.length = 0;
gdjs.Options_32MenuCode.GDStatsTextObjects2.length = 0;
gdjs.Options_32MenuCode.GDVolumeValueTextObjects1.length = 0;
gdjs.Options_32MenuCode.GDVolumeValueTextObjects2.length = 0;
gdjs.Options_32MenuCode.GDVolumeControlObjects1.length = 0;
gdjs.Options_32MenuCode.GDVolumeControlObjects2.length = 0;
gdjs.Options_32MenuCode.GDVolumeNameTextObjects1.length = 0;
gdjs.Options_32MenuCode.GDVolumeNameTextObjects2.length = 0;
gdjs.Options_32MenuCode.GDBackButtonObjects1.length = 0;
gdjs.Options_32MenuCode.GDBackButtonObjects2.length = 0;
gdjs.Options_32MenuCode.GDEnableCheatNameTextObjects1.length = 0;
gdjs.Options_32MenuCode.GDEnableCheatNameTextObjects2.length = 0;
gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects1.length = 0;
gdjs.Options_32MenuCode.GDCheatsEnabledToggleObjects2.length = 0;
gdjs.Options_32MenuCode.GDViewCheatsButtonObjects1.length = 0;
gdjs.Options_32MenuCode.GDViewCheatsButtonObjects2.length = 0;

gdjs.Options_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Options_32MenuCode'] = gdjs.Options_32MenuCode;
