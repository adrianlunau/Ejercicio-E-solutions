let input = [
    { nombre: "Pedro", edad: 20, ciudad: "Córdoba" },
    { nombre: "Patricia", edad: 22, ciudad: "Córdoba" },
    { nombre: "Jose", edad: 23, ciudad: "Mendoza" },
    { nombre: "Maria", edad: 20, ciudad: "Córdoba" },
    { nombre: "Juan", edad: 20, ciudad: "Córdoba" },
    { nombre: "Ana", edad: 22, ciudad: "Córdoba" }
];


function extraeNombres(entrada) {
    let resultado = [];
    let array = entrada.filter(element => element.ciudad === "Córdoba");

    array.sort((a, b) => {
        if (a.nombre > b.nombre) return 1
        if (a.nombre < b.nombre) return -1
        return 0;
    })

    array.sort((a, b) => a.edad - b.edad)
    array.forEach(element => {
        resultado.push(element.nombre);
    });

    return resultado;
}


console.log(extraeNombres(input));