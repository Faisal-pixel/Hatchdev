// class Laptop {
//     keyboard: KeyBoard[] = [];
//     nic: NetworkInterfaceCard;
//     screen: Display;
//     powerState: boolean = false;
//     bitKind: BitKind;

//     constructor(

//     ) {
//     }

//     // addKeyboard(keyboard: KeyBoard) {
//     //     this.keyboard.push(keyboard);
//     // }

//     switchOn() {
//         this.powerState = true;
//     }

//     shutDown() {
//         this.powerState = false;
//     }
// }

// class OeratingSystem {
//     kind: "Windows" | "Mac" | "Linux";
//     version: number;
// }

// class NetworkInterfaceCard {
//     name: string;
// }

// class KeyBoard {
//     kind: KeyBoardKind;
//     layout: KeyBoardLayout;
// }

// class Display {
//     size: number;
//     type: "amoled" | "oled" | "lcd";
// }

// class HardDisk {
//     size: number;
//     type: "HDD" | "SSD";
// }

// type KeyBoardKind = "in-built" | "external"; // this basically makes KeBoardKind a type that can only be "in-built" or "external"
// type KeyBoardLayout = "Qwerty" | "Azerty" | "Dvorak" | "Qwertz"; // this basically makes KeyBoardLayout a type that can only be "Qwerty" or "Azerty" or "Dvorak"
// type BitKind = "x64" | "x32" | "x86"; // this basically makes bitKind a type that can only be "x64" or "x32" or "x86"