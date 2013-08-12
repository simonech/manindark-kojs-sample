
function CachePostionViewModel() {
	var self = this;
	
	self.inventoryTable = ko.observableArray(CreateInventoryTable (inventory,23,3));

	self.SumCol1 = ko.computed(function() {
		return sumCol(self.inventoryTable,0);
	});

	self.SumCol2 = ko.computed(function() {
		return sumCol(self.inventoryTable,1);
	});

	self.SumCol3 = ko.computed(function() {
		return sumCol(self.inventoryTable,2);
	});
}

function sumCol (table,col) {
	var sum=0;
		for (var i = 0; i < table().length; i++) {
			if(table()[i]()[col]().numericValue()!=undefined)
				sum+=table()[i]()[col]().numericValue();
		};
		return sum;
}

function CreateAlphabet () {
	var array = new Array();
		for (var i = 0; i < 26; i++) {
			array[i]=String.fromCharCode(i+65);
		};
	return array;
}

function CreateInventoryTable (invertory, totRow, totCol) {
	var table = new Array();
	for (var i = 0; i < totRow; i++) {
		table[i]=ko.observableArray(CreateInventoryRow(inventory,i,totCol));
	};
	return table;
};

function CreateInventoryRow (invertory, rowNum, totCol) {
	var row = new Array();
	for (var i = 0; i < totCol; i++) {
		row[i]=ko.observable(CreateInventoryCell(inventory,rowNum,i));
	};
	return row;
};

function CreateInventoryCell (invertory, rowNum, colNum) {
	var item = _.find(invertory,function(el){return el.row == rowNum+1 && el.col ==colNum+1});
	var cell = new InventoryTableCell(item);
	return cell;
};

function InventoryTableCell (value) {
	var self = this;
	self.value=ko.observable();
	self.numericValue=ko.observable();
	if(value!=undefined){
		self.value=ko.observable(value.value);
	}

	self.hasContent=ko.computed(function(){return self.value()!=undefined});

	self.numericValue=ko.computed(function(){
		if(self.value()!=undefined){
			if(typeof self.value() == 'number')
				return self.value();
			else {
				return _.indexOf(alphabet, self.value(), true)+1;
			}
		}
	});
}

var alphabet = CreateAlphabet();

var inventory = [
{
	row:1,
	col:2,
	value:'S'
},
{
	row:2,
	col:1,
	value:'A'
},
{
	row:3,
	col:1,
	value:'B'
},
{
	row:4,
	col:1,
	value:'D'
},
{
	row:5,
	col:1,
	value:''
},
{
	row:6,
	col:3,
	value:3
},
{
	row:7,
	col:2,
	value:'R'
},
{
	row:8,
	col:2,
	value:'I'
},
{
	row:9,
	col:1,
	value:'C'
},
{
	row:10,
	col:3,
	value:7
},
{
	row:11,
	col:1,
	value:'H'
},
{
	row:12,
	col:1,
	value:'Q'
},
{
	row:13,
	col:2,
	value:'V'
},
{
	row:14,
	col:3,
	value:2
},
{
	row:15,
	col:3,
	value:100
},
{
	row:16,
	col:3,
	value:3
},
{
	row:17,
	col:2,
	value:'E'
},
{
	row:18,
	col:2,
	value:'E'
},
{
	row:19,
	col:3,
	value:58
},
{
	row:20,
	col:3,
	value:1
},
{
	row:21,
	col:2,
	value:'U'
},
{
	row:22,
	col:3,
	value:4
},
{
	row:23,
	col:2,
	value:'N'
}
];