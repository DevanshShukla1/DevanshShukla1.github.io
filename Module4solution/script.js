var names=new Array();
names[0]="Ram";
names[1]="Jasmine";
names[2]="Jenny";
names[3]="jalaj";
names[4]="passepartout";
names[5]="franky";
names[6]="lamar";
names[7]="pearson";
names[8]="linlin";
names[9]="jasper";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}