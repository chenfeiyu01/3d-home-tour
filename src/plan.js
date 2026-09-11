// Single source of truth: coordinates traced on the supplied 688 × 600 px plan.
// Uniform scale uses the north facade's 10,300 mm label. Other printed dimensions
// are not used to stretch individual rooms, because their raster ratios differ.
export const PLAN_SCALE = 401 / 10.3;
export const toPlan = ([x,y]) => [(x-74)/PLAN_SCALE,(y-74)/PLAN_SCALE];
export const outlinePx = [[74,74],[475,74],[475,203],[535,203],[535,291],[620,291],[620,505],[608,505],[608,519],[497,519],[497,505],[488,505],[488,532],[226,532],[226,484],[74,484]];
export const center = [(620-74)/PLAN_SCALE/2,(532-74)/PLAN_SCALE/2];
export const polygonsPx = {
 living:[[226,291],[488,291],[488,458],[226,458]],
 dining:[[193,157],[265,157],[265,203],[475,203],[475,291],[226,291],[226,246],[175,246],[175,204],[193,204]],
 kitchen:[[377,74],[475,74],[475,203],[377,203]],
 master:[[74,291],[175,291],[175,246],[226,246],[226,484],[74,484]],
 bedA:[[74,74],[193,74],[193,204],[74,204]],
 bedB:[[488,291],[535,291],[535,377],[620,377],[620,505],[608,505],[608,519],[497,519],[497,505],[488,505]],
 study:[[265,74],[377,74],[377,203],[265,203]],
 bathMaster:[[74,204],[175,204],[175,291],[74,291]],
 bathA:[[193,74],[265,74],[265,157],[193,157]],
 bathB:[[535,291],[620,291],[620,377],[535,377]],
 balcony:[[226,458],[488,458],[488,532],[226,532]],
 entry:[[475,203],[535,203],[535,291],[475,291]],
};
export const roomPointsPx={living:[359,365],dining:[356,250],kitchen:[426,140],master:[150,387],bedA:[133,138],bedB:[554,440],study:[321,138],bathMaster:[126,250],bathA:[229,116],bathB:[578,335],balcony:[357,497],entry:[507,248]};
export const viewpointsPx={
 living:[[359,438],[359,320]],dining:[[355,279],[347,218]],kitchen:[[415,183],[435,108]],
 master:[[178,463],[142,347]],bedA:[[179,189],[127,120]],bedB:[[510,483],[560,425]],
 study:[[350,184],[312,125]],bathMaster:[[130,277],[121,225]],bathA:[[243,144],[221,105]],
 bathB:[[546,342],[585,318]],balcony:[[365,516],[349,463]],entry:[[514,272],[505,216]],
};
// [x1,y1,x2,y2, thickness in metres]; each segment ends at an actual opening.
export const wallsPx = [
 [74,74,84,74,.18],[180,74,212,74,.18],[247,74,276,74,.18],[363,74,408,74,.18],
 [74,74,74,237,.18],[74,270,74,484,.18],
 [475,74,475,203,.18],[475,203,489,203,.18],[527,203,535,203,.18],[535,203,535,291,.18],
 [535,291,620,291,.18],[620,291,620,505,.18],[488,505,497,505,.16],[608,505,620,505,.18],
 [74,484,85,484,.18],[207,484,226,484,.18],
 [226,484,226,532,.18],[226,532,241,532,.18],[477,532,488,532,.18],[488,505,488,532,.18],
 [193,74,193,165,.10],[193,199,193,204,.10],[74,204,193,204,.10],
 [193,157,205,157,.10],[235,157,265,157,.10],[265,74,265,203,.10],
 [377,74,377,203,.10],[265,203,294,203,.10],[362,203,377,203,.10],
 [377,203,397,203,.10],[457,203,475,203,.10],
 [175,204,175,291,.10],[74,291,111,291,.10],[142,291,175,291,.10],
 [175,246,185,246,.10],[216,246,226,246,.10],[226,246,226,484,.10],
 [475,291,535,291,.10],[488,291,488,316,.10],[488,347,488,505,.10],
 [535,291,535,325,.10],[535,355,535,377,.10],[535,377,620,377,.10],
 // Only the two short piers separate the living room from the balcony.
 [226,458,266,458,.08],[472,458,488,458,.08],
];
// Sill height and total height are inferred elevations, not dimensions from plan.
export const windowsPx = [
 {id:'bedA-north',a:[84,74],b:[180,74],sill:.72},
 {id:'bathA-north',a:[212,74],b:[247,74],sill:1.22},
 {id:'study-north',a:[276,74],b:[363,74],sill:.72},
 {id:'kitchen-north',a:[408,74],b:[475,74],sill:.94},
 {id:'bathMaster-west',a:[74,237],b:[74,270],sill:1.22},
 {id:'master-south',a:[85,484],b:[207,484],sill:.70},
 {id:'bedB-bay-front',a:[497,519],b:[608,519],sill:.48},
 {id:'bedB-bay-west',a:[497,505],b:[497,519],sill:.48},
 {id:'bedB-bay-east',a:[608,519],b:[608,505],sill:.48},
 {id:'balcony-enclosure',a:[241,532],b:[477,532],sill:.18,enclosure:true},
];
export const doorsPx = [
 {id:'bedA',name:'卧室 A 平开门',type:'hinged',a:[193,199],b:[193,165],swing:-Math.PI/2},
 {id:'bathA',name:'卫生间 A 平开门',type:'hinged',a:[205,157],b:[235,157],swing:-Math.PI/2},
 {id:'study',name:'书房移门',type:'sliding',a:[294,203],b:[362,203],panels:2},
 {id:'kitchen',name:'厨房移门',type:'sliding',a:[397,203],b:[457,203],panels:2},
 // The reference contains a swing arc here; the user's explicit correction wins.
 {id:'bathMaster',name:'主卫移门',type:'sliding',a:[111,291],b:[142,291],panels:1,pocket:'right',opaque:true},
 {id:'master',name:'主卧平开门',type:'hinged',a:[216,246],b:[185,246],swing:-Math.PI/2},
 {id:'entry',name:'入户平开门',type:'hinged',a:[489,203],b:[527,203],swing:-Math.PI/2},
 {id:'bedB',name:'卧室 B 平开门',type:'hinged',a:[488,316],b:[488,347],swing:-Math.PI/2},
 {id:'bathB',name:'卫生间 B 平开门',type:'hinged',a:[535,355],b:[535,325],swing:Math.PI/2},
];
export const containsPoint=(polygon,x,z)=>{let inside=false;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const [xi,zi]=polygon[i],[xj,zj]=polygon[j];if((zi>z)!==(zj>z)&&x<(xj-xi)*(z-zi)/(zj-zi)+xi)inside=!inside;}return inside;};
export function roomGeometry(id){const polygon=polygonsPx[id].map(toPlan);const xs=polygon.map(p=>p[0]),zs=polygon.map(p=>p[1]);return{polygon,box:[Math.min(...xs),Math.min(...zs),Math.max(...xs),Math.max(...zs)],point:toPlan(roomPointsPx[id]),viewpoint:viewpointsPx[id].map(toPlan)};}
