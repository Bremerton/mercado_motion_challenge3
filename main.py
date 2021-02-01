while True:
    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) > 0 or input.acceleration(Dimension.X) < 0:
        light.set_all(light.rgb(0,0,255))
    print(input.acceleration(Dimension.Y))
    if input.acceleration(Dimension.Y) > 0 or input.acceleration(Dimension.Y) < 0:
        light.set_all(light.rgb(0,0,255))
    print(input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.Z) > 0 or input.acceleration(Dimension.Z)  < 0:
        light.set_all(light.rgb(0,0,255))
