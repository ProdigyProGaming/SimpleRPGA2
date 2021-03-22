gdjs.How_32To_32Play_32MenuCode = {};
gdjs.How_32To_32Play_32MenuCode.GDPlayerObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDPlayerObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDGunObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDGunObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDSwordObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDSwordObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDBulletObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDBulletObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDHealthBarBackgroundObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDHealthBarBackgroundObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDHealthBarObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDHealthBarObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDHealthBarValueObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDHealthBarValueObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDCurrencyTextObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDCurrencyTextObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryBackgroundObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryBackgroundObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDInventorySlotObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDInventorySlotObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryTrashSlotObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryTrashSlotObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryMovingSlotObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryMovingSlotObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDHotBarSelectionObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDHotBarSelectionObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryQuantityObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDInventoryQuantityObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDChangeSceneInteractionObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDChangeSceneInteractionObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDSolidObjectObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDSolidObjectObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDStatsBackgroundObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDStatsBackgroundObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDStatsTextObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDStatsTextObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDBackButtonObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDBackButtonObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDControlsTextObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDControlsTextObjects2= [];
gdjs.How_32To_32Play_32MenuCode.GDAimTextObjects1= [];
gdjs.How_32To_32Play_32MenuCode.GDAimTextObjects2= [];

gdjs.How_32To_32Play_32MenuCode.conditionTrue_0 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.How_32To_32Play_32MenuCode.conditionTrue_1 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.How_32To_32Play_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.How_32To_32Play_32MenuCode.mapOfGDgdjs_46How_9532To_9532Play_9532MenuCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.How_32To_32Play_32MenuCode.GDBackButtonObjects1});gdjs.How_32To_32Play_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.How_32To_32Play_32MenuCode.GDBackButtonObjects1);

gdjs.How_32To_32Play_32MenuCode.condition0IsTrue_0.val = false;
gdjs.How_32To_32Play_32MenuCode.condition1IsTrue_0.val = false;
gdjs.How_32To_32Play_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.How_32To_32Play_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.How_32To_32Play_32MenuCode.mapOfGDgdjs_46How_9532To_9532Play_9532MenuCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.How_32To_32Play_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.How_32To_32Play_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.How_32To_32Play_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.How_32To_32Play_32MenuCode.conditionTrue_1 = gdjs.How_32To_32Play_32MenuCode.condition2IsTrue_0;
gdjs.How_32To_32Play_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10848708);
}
}}
}
if (gdjs.How_32To_32Play_32MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.How_32To_32Play_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.How_32To_32Play_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDGunObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDGunObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDSwordObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDSwordObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDBulletObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDBulletObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHealthBarBackgroundObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHealthBarBackgroundObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHealthBarObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHealthBarObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHealthBarValueObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHealthBarValueObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDCurrencyTextObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDCurrencyTextObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventorySlotObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventorySlotObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryTrashSlotObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryTrashSlotObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryMovingSlotObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryMovingSlotObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHotBarSelectionObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDHotBarSelectionObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryQuantityObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDInventoryQuantityObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDChangeSceneInteractionObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDChangeSceneInteractionObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDSolidObjectObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDSolidObjectObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDStatsBackgroundObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDStatsBackgroundObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDStatsTextObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDStatsTextObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDBackButtonObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDBackButtonObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDControlsTextObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDControlsTextObjects2.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDAimTextObjects1.length = 0;
gdjs.How_32To_32Play_32MenuCode.GDAimTextObjects2.length = 0;

gdjs.How_32To_32Play_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['How_32To_32Play_32MenuCode'] = gdjs.How_32To_32Play_32MenuCode;
