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
                    "alignment": "Villain",
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
                        "info": "O'Grady is a low-level agent of SHIELD who stumbled upon the Ant-Man suit in SHIELD's headquarters. A man of few morals and willing to lie, cheat, steal and manipulate in order to get ahead in life, Eric stole the armor for his own selfish plans, which included using his status as a 'super-hero'to seduce women and humiliate and torment others. He had his own short-lived title before being part of other teams such as joining Avengers. "
                    },
                    {
                        "id": "15",
                        "charName": "Poison Ivy",
                        "alias": "Pamela Isley",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "Poison Ivy is depicted as one of the world's most notorious eco-terrorists. She is obsessed with plants, botany, ecological extinction and environmentalism. She uses toxins from plants and mind-controlling pheromones for her criminal activities, which are usually aimed at protecting endangered species and the natural environment. "
                    },
                    {
                        "id": "16",
                        "charName": "Wonder Woman",
                        "alias": "Diana Prince",
                        "studio": "DC Comics",
                        "alignment": "Hero",
                        "info": "Wonder Woman is Princess Diana of the immortal Amazons from Greek mythology.  When army pilot Steve Trevor crashes on the warriors’ secluded island paradise, Diana wins the right to escort him home and make her people known to the world. Entering our cynical world for the first time, there’s a lot she must wrap her head around, especially our ways of war, hate, and, well… dating. "
                    },
                    {
                        "id": "17",
                        "charName": "Batgirl",
                        "alias": "Barbara Gordon",
                        "studio": "DC Comics",
                        "alignment": "Hero",
                        "info": "Batgirl is Barbara Gordon, a confident young woman as committed to justice as her father, Gotham City’s top cop Commissioner Gordon. But when her overprotective Dad forbids her from joining the force, her admiration of Batman leads her to rebel the way crime fighting rebels do in Gotham City: by picking up the mantle of the Bat. "
                    },
                    {
                        "id": "18",
                        "charName": "Green Arrow",
                        "alias": "Oliver Queen",
                        "studio": "DC Comics",
                        "alignment": "Hero",
                        "info": "Spoiled billionaire Oliver Queen came home with an entirely different personality and a newfound purpose in life. Completely self-absorbed and never caring about anything but himself, Queen was on a leisurely sailing trip when his assistant betrayed him, leaving him for dead on a desolate remote island. Stranded, he survived by, amongst other things, mastering a bow and arrow. "
                    },
                    {
                        "id": "19",
                        "charName": "The Flash",
                        "alias": "Barry Allen",
                        "studio": "DC Comics",
                        "alignment": "Hero",
                        "info": "Young Barry Allen’s life stopped the minute his mother was murdered. The true killer never found, its mystery obsessed Barry, driving him to become a forensic scientist. Consumed by his work, he spent his life chained to his desk, solving every case that flew across it. But when a freak lightning bolt hits a nearby shelf in his lab, Barry receives super-speed, becoming the Flash. "
                    },
                    {
                        "id": "20",
                        "charName": "Deadshot",
                        "alias": "Floyd Lawton",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "Part of Gotham City's long line of rogues, Deadshot is obsessed with precision, firmly believing that the target who’s been paid for should be the only one taken down. "
                    },
                    {
                        "id": "22",
                        "charName": "Aquaman",
                        "alias": "Arthur Curry",
                        "studio": "DC Comics",
                        "alignment": "Hero",
                        "info": "Cast out from Atlantis as a baby, Arthur Curry grew up on land, thinking himself a normal human. But when he matured, Atlantis returned, claiming him as their rightful king. Caught between a surface world constantly ravaging the sea and Atlanteans looking to lash out in revolt, he’s committed to protecting the entire globe. "
                    },
                    {
                        "id": "23",
                        "charName": "Bane",
                        "alias": "Bane",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "An orphaned boy imprisoned by tyrants and used as a lab rat for high-risk experiments, Bane broke free from his shackles and grew to become one of the most powerful super-villains in Gotham City. "
                    },
                    {
                        "id": "24",
                        "charName": "Deathstroke",
                        "alias": "Slade Wilson",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "A military man, Slade Wilson was recruited into the special ops unit Team 7, where he participated in highly dangerous classified missions. Willing to do whatever he could to better himself, Slade underwent an experimental procedure that granted him enhanced speed, strength and intelligence, effectively making him the world's greatest soldier. "
                    },
                    {
                        "id": "25",
                        "charName": "Joker",
                        "alias": "Joker",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "Not much is known about his past, but his acts during the present are what define the Joker as one of the greatest threats to our heroes and the people they've sworn to protect. He's killed a Robin, crippled Batgirl, and tortured and murdered countless people throughout the DC Universe—all just for a laugh. "
                    },
                    {
                        "id": "26",
                        "charName": "Lex Luther",
                        "alias": "Lex Luther",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "A self-made man whose immeasurable intellect is always in conflict with his equally immeasurable ego, Lex Luthor is one of the world's most brilliant minds and most famous villains. "
                    },
                    {
                        "id": "27",
                        "charName": "Mr Freeze",
                        "alias": "Victor Fries",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "An expert in the field of cryogenics, Victor led a relatively normal existence. He worked diligently, but also fell in love with and eventually married a woman named Nora. Sadly, things took an unfortunate turn soon after. Nora became terminally ill, and to stop her degenerative disease from taking her life, Victor put her into suspended animation. His devotion to Nora led to his downfall. "
                    },
                    {
                        "id": "28",
                        "charName": "Robin",
                        "alias": "Dick Grayson",
                        "studio": "DC Comics",
                        "alignment": "Hero",
                        "info": "Acrobat Dick Grayson was the youngest member of his parents’ death-defying circus act. But after their cold-blooded murder, Dick vowed revenge. Seeing a genuine piece of himself in the boy, Batman took him in—and gave him a better outlet for his anger.  "
                    },
                    {
                        "id": "29",
                        "charName": "Scarecrow",
                        "alias": "Jonathon Crane",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "As a young child, Jonathan Crane was subjected to sick and twisted experiments on fear conducted by his own father. Emotionally scarred and mentally unstable from the ordeal, Crane spent his childhood living in fear until he made an important realization—if he could control fear, it would never again control him."
                    },
                    {
                        "id": "30",
                        "charName": "Two-face",
                        "alias": "Harvey Dent",
                        "studio": "DC Comics",
                        "alignment": "Villain",
                        "info": "A prominent and well-educated District Attorney, Harvey Dent fought valiantly to uphold the law and make the city a better place. In any other city, it would have worked. Not in Gotham—a place where greed and corruption stretches from the depths of Crime Alley to the shimmering heights of the mayor’s office. Dent’s spiral into Gotham’s madness came swiftly after a criminal threw acid into his face, leaving half of it horribly scarred. Seeking refuge in the underbelly of Gotham, the name Harvey Dent and all the good it stood for was lost…and Two-Face rose from the darkness."
                    },
                    {
                        "id": "31",
                        "charName": "Captain Marvel",
                        "alias": "Carol Danvers",
                        "studio": "Marvel",
                        "alignment": "Hero",
                        "info": "Carol Danvers entered the Air Force upon graduating from high school to pursue her love of aircrafts and her dreams of flying. Carol was a top student at the Air Force Academy and enjoyed a rapid career advancement rising to the rank of Major. Because of her stellar performance, superb combat skills and natural intellect, Carol was recruited into the intelligence field."
                    },
                    {
                        "id": "32",
                        "charName": "Captain America",
                        "alias": "Steve Rogers",
                        "studio": "Marvel",
                        "alignment": "Hero",
                        "info": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty."
                    },
                    {
                        "id": "33",
                        "charName": "Dr Strange",
                        "alias": "Stephan Strange",
                        "studio": "Marvel",
                        "alignment": "Hero",
                        "info": "Doctor Strange is one of the most powerful sorcerers in existence. Like most sorcerers, he draws his power from three primary sources: the invocation of powerful mystic entities or objects, the manipulation of the universe's ambient magical energy, and his own psychic resources."
                    },
                    {
                        "id": "34",
                        "charName": "Green Goblin",
                        "alias": "Norman Osborn",
                        "studio": "Marvel",
                        "alignment": "Villain",
                        "info": "The father of Peter Parker's best friend, Harry, businessman Norman Osborn moonlights as the unstable Green Goblin and has caused Spider-Man more tragedy than any other foe!"
                    }
            ];
        },
        controllerAs: 'cc'
        }
});