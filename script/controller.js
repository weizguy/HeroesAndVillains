var app = angular.module("comicsApp", []);


// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyATXzzQEVOAjhc-v4zj3fz1CfGraPLUZWw",
//     authDomain: "heronvillian-a3494.firebaseapp.com",
//     databaseURL: "https://heronvillian-a3494.firebaseio.com",
//     storageBucket: "heronvillian-a3494.appspot.com",
//     messagingSenderId: "854084412655"
// };
// firebase.initializeApp(config);
//
// var fbRef = firebase.database();
//
// var list = [];
// var characters;
// var char;
// fbRef.ref().once('value', function (getInfo){
//     char = getInfo.val();
//
//     for(var j = 0; j < 12; j++){
//         list.push(char.Characters[j]);
//     }
//     console.log("list: ", list);
// });
//
// characters = list;


app.directive("characterList", function(){
    return {
        restrict: 'E',
        templateUrl: 'characters.html',
        controller: function() {
            this.characterArr =

                [
                {
                    "id": "1",
                    "charName": "Spider-Man",
                    "alias": "Peter Parker",
                    "studio": "Marvel",
                    "alignment": "Hero",
                    "info": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people."
                },
                {
                    "id": "2",
                    "charName": "Superman",
                    "alias": "Clark Kent",
                    "studio": "DC Comics",
                    "alignment": "Hero",
                    "info": "Rocketed to Earth from the dying planet Krypton, baby Kal-El was found by a farming couple who named the boy Clark Kent and raised him as their own. Discovering his enormous powers, they instilled in him strong moral values?and inspired him to become a hero."
                },
                {
                    "id": "3",
                    "charName": "Batman",
                    "alias": "Bruce Wayne",
                    "studio": "DC Comics",
                    "alignment": "Hero",
                    "info": "Millionaire Bruce Wayne was just a kid when he watched his parents get gunned down during a mugging in Gotham City. The crime would define his life, as he dedicated himself to becoming the world?s greatest weapon against crime?the Batman."
                },
                {
                    "id": "4",
                    "charName": "Harley Quinn",
                    "alias": "Harleen Quinzel",
                    "studio": "DC Comics",
                    "alignment": "Villain",
                    "info": "Before her descent into madness, Dr. Harleen Quinzel was a promising psychiatrist assigned to Arkham Asylum, Gotham's home for the criminally insane. But after meeting the Joker, the young doctor became obsessed with the crazed criminal's warped mind."
                },
                {
                    "id": "5",
                    "charName": "Catwoman",
                    "alias": "Selina Kyle",
                    "studio": "DC Comics",
                    "alignment": "Neutral",
                    "info": "Utilizing a cat mask and suit to steal from the city's rich and corrupt, she's a master at hand-to-hand combat and acrobatics, stealthy as a ninja and an expert at breaking and entering."
                },
                {
                    "id": "6",
                    "charName": "Penguin",
                    "alias": "Oswald Cobblepot",
                    "studio": "DC Comics",
                    "alignment": "Villain",
                    "info": "No one knows more about what the evil forces of Gotham are up to at any given moment than he and he uses that information to blackmail, intimidate and corrupt anyone he can, especially when it?s in the service of bringing down Batman."
                },
                {
                    "id": "7",
                    "charName": "Riddler",
                    "alias": "Edward Nygma        ",
                    "studio": "DC Comics",
                    "alignment": "Villain",
                    "info": "Possessing a genius-level intellect, the Riddler creates elaborate, sometimes Rube Goldberg-esque traps, and is even willing to use innocent civilians as bait. Although not physically imposing, the Riddler's brilliance, neurosis and lack of empathy make him an incredibly dangerous foe."
                },
                {
                    "id": "8",
                    "charName": "Iron Man",
                    "alias": "Tony Stark",
                    "studio": "Marvel",
                    "alignment": "Hero",
                    "info": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man."
                },
                {
                    "id": "9",
                    "charName": "Hulk",
                    "alias": "Bruce Banner",
                    "studio": "Marvel",
                    "alignment": "Hero",
                    "info": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
                },
                {
                    "id": "10",
                    "charName": "Thor",
                    "alias": "Thor Odinson",
                    "studio": "Marvel",
                    "alignment": "Hero",
                    "info": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause."
                },
                {
                    "id": "11",
                    "charName": "Magneto",
                    "alias": "Max Eisenhardt",
                    "studio": "Marvel",
                    "alignment": "Villain",
                    "info": "Magneto has long been the face of mutant separatism, in opposition to Charles Xavier's ideal of coexistence with humanity."
                },
                {
                    "id": "12",
                    "charName": "Apocalypse",
                    "alias": "En Sabah Nur",
                    "studio": "Marvel",
                    "alignment": "Villain",
                    "info": "One of the very first mutants, Apocalypse is both thousands of years old and a monstrous tyrant that has been a longtime foe of the X-Men. Apocalypse believes that only the strongest (whether mutant or superhuman) should survive. His body is a mix of organics and powerful celestial technology."
                },
                    {
                        "id": "13",
                        "charName": "Deadpool",
                        "alias": "Wade Wilson",
                        "studio": "Marvel",
                        "alignment": "Hero",
                        "info": "Deadpool possesses a superhuman healing factor derived from that of the mutant Wolverine that allows him to regenerate damaged or destroyed areas of his cellular structure at a rate far greater than that of an ordinary human. "
                    },
                    {
                        "id": "14",
                        "charName": "Ant-Man",
                        "alias": "Eric O'Grady",
                        "studio": "Marvel",
                        "alignment": "Hero",
                        "info": "O'Grady is a low-level agent of SHIELD who stumbled upon the Ant-Man suit in SHIELD's headquarters. A man of few morals and willing to lie, cheat, steal and manipulate in order to get ahead in life, Eric stole the armor for his own selfish plans, which included using his status as a 'super-hero'to seduce women and humiliate and torment others. He had his own short-lived title before being part of other teams such as joining Avengers: The Initiative as his first team and then joining The Thunderbolts but more recently Secret Avengers, where the character perished heroically while defending a child against the villain known as Father. "
                    }
            ];
        },
        controllerAs: 'cc'
        }
});