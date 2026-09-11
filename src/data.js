import {roomGeometry} from './plan.js';
export const rooms = [
 {id:'living',name:'客厅',en:'LIVING ROOM',area:'48.2',areaNote:'客餐厅共享面积',icon:'sofa',description:'南向通透的客餐厅一体化空间，连接阳台，延伸生活场景。自然光与木质温润相融，低矮家具让视线自由穿行。',materials:['自然橡木','亚麻织物','洞石','鼠尾草绿']},
 {id:'dining',name:'餐厅',en:'DINING ROOM',area:'48.2',areaNote:'客餐厅共享面积',icon:'dining',description:'六人餐桌置于厨房与客厅之间，形成流畅的备餐、就餐动线。浅色桌面与曲木餐椅搭配，餐后也能成为家人共享的阅读桌。'},
 {id:'kitchen',name:'厨房',en:'KITCHEN',area:'8.7',icon:'kitchen',description:'厨房通过玻璃移门与餐厅相连。紧凑的 L 形厨房将清洗、备餐与烹饪区顺次排列。石材台面、木纹地柜与嵌入式家电让日常料理井然有序。'},
 {id:'master',name:'主卧',en:'MASTER BEDROOM',area:'21.4',icon:'bed',description:'主卧床头靠客厅电视墙的卧室一侧，床尾朝西，保留南向采光。软包床头、层叠棉麻床品、通顶衣柜和床侧阅读灯共同构成安静的睡眠空间。'},
 {id:'bedA',name:'卧室 A',en:'BEDROOM A',area:'10.5',icon:'bed',description:'北侧卧室以浅木与暖白为主，双人床靠墙布置，留出顺畅的床侧通道。窗前自然光与小型储物家具满足日常起居。'},
 {id:'bedB',name:'卧室 B',en:'BEDROOM B',area:'14.5',icon:'bed',description:'东南卧室床头靠东侧外墙，衣柜移至西侧，保留床尾通道。柔软床品、胡桃木边柜和南向宽窗形成舒适的客卧，也适合长期居住。'},
 {id:'study',name:'书房',en:'STUDY',area:'9.7',icon:'study',description:'书房南侧采用双扇移门，打开后衔接公共走廊。沿墙书架收纳藏书与物件，独立书桌面向开放空间。木质桌面、可调台灯与人体工学座椅构成专注而温暖的工作角落。'},
 {id:'bathMaster',name:'主卫',en:'MASTER BATH',area:'5.8',icon:'bath',description:'主卫入口位于南侧，采用沿墙推拉的移门。卫浴空间采用灰色石纹砖，包含淋浴、坐便器和悬浮浴室柜。透明隔断分离干湿区域，同时保留视觉通透感。'},
 {id:'bathA',name:'卫生间 A',en:'BATHROOM A',area:'4.2',icon:'bath',description:'北侧紧凑卫生间以悬浮洗手台和玻璃淋浴隔断节省空间。浅石材与黑色五金形成干净的细节对比。'},
 {id:'bathB',name:'卫生间 B',en:'BATHROOM B',area:'4.9',icon:'bath',description:'东侧客卫方便卧室 B 使用，干湿分区使洗漱与淋浴互不干扰。大尺寸墙砖和镜面延展小空间的视觉尺度。'},
 {id:'balcony',name:'阳台',en:'BALCONY',area:'13.0',icon:'balcony',description:'客厅外延的南向阳台，用木色地板、休闲椅与不同高度的绿植构成小花园。外沿通高窗框与玻璃形成封闭阳台，客厅一侧取消移门和轨道，保留两端短墙垛，以连续木地板打通为一体，是阅读与休憩的角落。'},
 {id:'entry',name:'玄关',en:'ENTRANCE',area:'3.5',icon:'entry',description:'入户处设置薄型鞋柜、换鞋凳与置物托盘，让归家的动作自然衔接。木质收纳呼应全屋材质，保持入口清爽。'},
].map(room=>({...room,...roomGeometry(room.id)}));
export const getRoom = id => rooms.find(r=>r.id===id);
export const materialNames=['自然橡木','亚麻织物','浅色石材','鼠尾草绿'];
