// spread operator=> we can copy array,object and so on
const languages=['javascript','python','bootstrap'];
const newlanguage=['MongoDB',...languages];
console.log(languages)
console.log(newlanguage)



// if we have to change value of key


const setting={
    volume:10,
    brightness:90,
}

const newSetting=setting;
console.log(setting===newSetting);

// adding property in the object
console.log(setting);
setting.volume=30;
console.log(setting.volume);

// we going to copy object using spread operator
const newset={...setting};
console.log("this is newset:",newset);
