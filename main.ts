while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 0 || input.acceleration(Dimension.X) < 0) {
        light.setAll(light.rgb(0, 0, 255))
    }
    
    console.log(input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.Y) > 0 || input.acceleration(Dimension.Y) < 0) {
        light.setAll(light.rgb(0, 0, 255))
    }
    
    console.log(input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) > 0 || input.acceleration(Dimension.Z) < 0) {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
