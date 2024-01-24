const rooms = document.querySelector('.r');
const dropdown = document.querySelector('.dropdown');

let timeoutIdRooms;

rooms.addEventListener('mouseover', () => {
    dropdown.style.display = 'block';
});

rooms.addEventListener('mouseout', () => {
    timeoutIdRooms = setTimeout(() => {
        dropdown.style.display = 'none';
    }, 4000);
});

const dhoma2 = document.querySelector('.dhoma');
const Roomsdropdown = document.querySelector('.Rooms-Dropdown');

let timeoutIdRoomsDropdown;

dhoma2.addEventListener('mouseover', () => {
    Roomsdropdown.style.display = 'block';
});

dhoma2.addEventListener('mouseout', () => {
    timeoutIdRoomsDropdown = setTimeout(() => {
        Roomsdropdown.style.display = 'none';
    }, 3400);
});




const ikona =document.querySelector('#ikona');
const head2d = document.querySelector('.head-2-d')
ikona.addEventListener(
    'click',
     ()=>{
        if (head2d.style.display=='none') {
            head2d.style.setProperty("display","block","important")
            
        }else{
            head2d.style.setProperty("display","none","important")
        }
     }
)


const tabela = document.querySelector('.head-2')
window.addEventListener(
    'resize',
     ()=>{
        if (window.innerWidth<700) {
            tabela.style.display='none'
            ikona.style.setProperty("display","block","important")
        }if ((window.innerWidth>700)){
            tabela.style.setProperty("display","flex","important");
            ikona.style.setProperty("display","none","important")
        }
     }
)

const X =document.querySelector('#X');

X.addEventListener(
    'click',
()=>{
    head2d.style.display='none';
}

)