/* This script replaces http requests and returns fake data to simulate that we are online */

const fakeImageData = [{
	"fileName": "Images/AmbientOcclusion/side_base_down.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARUlEQVQ4T2NkoBAwAvWzUWIGyAAuSg0QotQAcUoNkKfUABVKDdCg1ABDSg2woNQAW0oNcKfUAE9KDQim1IAISg1IosQAADGRAvip/jiKAAAAAElFTkSuQmCC",
	"lastName": "side_base_down.png"
}, {
	"fileName": "Images/AmbientOcclusion/side_outer_left.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVQ4T6WTgQqDMAxE69Qp/v/nOpmv5OQs3WZdoTSx5OVyxS6l9Ng3a7PYc/+u+Di7KH5GMRcsoKsBybkrmyQHDEWBABRxV1O1loDZuqirzmCcVdQAYyiRNz6KVKAoj/QJICXyQ94o7/fgRfINgBIVqLObmEf7BZjM2JoHlwA8sa/TU15RAAAlpQ8Z2gKoedIMWOR+zNS3KgCA+8f/cxcA6JYHUsCZPflHAYDlDYgYJvtzxhGEAAAAAElFTkSuQmCC",
	"lastName": "side_outer_left.png"
}, {
	"fileName": "Images/AmbientOcclusion/side_outer_right.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVQ4T52ROw/CMAyEG0AMHVkYWdiY2Fg6I2YWZv7/jKA8hK/4pMOtQkMly40fn31Jqj7fxOwVPOJDMY1XyU5zh9CxiVA2zByoA1sAajMmdRMUPmQrBWAIch1gIRtwOkNRGvNXBSx9Coo5UeVgMmUAcDf7Aqy8YGr+KTpVK//R2AOsRScnYRsYz/Bs7AE2oZiNKuOWA2wzl4hUa5YF7AKAR2yCxp+AxjuGNI8C7P32ORmvcXHNowCHcIl46yLAUe4AjcWAkwPwvn8BzrJyMeAN/pudEyewV70AAAAASUVORK5CYII=",
	"lastName": "side_outer_right.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_base_down.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASUlEQVQ4T2NkYGBgBGKyAUgzC9m6obazUWoAF6UG8FBqgAClBghRaoAIpQZIUGqANKUGyFJqgCKlBihRaoAapQZoUGqADiUGAAAtNgF1RveE0gAAAABJRU5ErkJggg==",
	"lastName": "top_base_down.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_base_left.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVQ4T2NkYGDQAeI/QPwPSv9H4v9FYsPkkem/jKMGjIYBA8NoGAyPMAAA8jzwIRW86bUAAAAASUVORK5CYII=",
	"lastName": "top_base_left.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_base_right.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVQ4T2NkYGBgBGJmIGYCYhY0GiaGLA9SD1cH4owaMBoGo+mAgWUYhAEAtEMC0VRrke8AAAAASUVORK5CYII=",
	"lastName": "top_base_right.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_base_up.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATElEQVQ4T2NkYGDQAWKyASNQpwbZuoEaQQaoUWqAEqUGKFJqgCylBkhTaoAEpQaIUGqAEKUGCFBqAA+lBnBRagAbpQawUGoAKEORDQAV2AF1TKShtwAAAABJRU5ErkJggg==",
	"lastName": "top_base_up.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_hole.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcklEQVQ4T2NkYGDQAWKyASPUgD9kmsCCbMA/Eg1hAqrHMOAvkYYwA9VhNQDkFUIuAWvEZ8B/oCQul4BsBnmboAHYXAKzmSQDYLEDt5FUF1BsAHKkkOQFigKRomikOCERmRDByjBSIimaYWrheYEczWA9AFNtOtGdOlGbAAAAAElFTkSuQmCC",
	"lastName": "top_hole.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_inner_bottom_left.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAb0lEQVQ4T6WSAQ6AIAwDx3/8/+tUXA2SoSDrIFlCFtrewpKIbFq71ql1lHruvT56uWhyWjSQFQNQhg0QfJ8IAeavhzWoyRECG0wTNNjsCB9sxqCL7TUYYnsMfrFnBq7k0TdOZ34/sItEi+0qh8QQXdwvfnebn6+NAAAAAElFTkSuQmCC",
	"lastName": "top_inner_bottom_left.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_inner_bottom_right.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVQ4T6XSXQtAMBQG4A0XXEgpuVBSSi78/99nr5x17HDMqGXmeLz7sMaY3DXrWuZaEdxpDDXUR62vowc3lg6U+Pq88BeeJCpBxQB0EZciRgF1ABDC06hr0NwAHEEaFWgfAL6wKtApACVRgf4FwGt+PsQ5GCIAPh0BjJEATUcA0wdAnFho80fgssUAlgTAJwGwJgLH7gDYfgBmB9KLAtHx5P9VAAAAAElFTkSuQmCC",
	"lastName": "top_inner_bottom_right.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_inner_upper_left.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVQ4T6XSUQ6AIAwD0HEf7386FGlCiAKytS7h96XdSGZ21CdPakBWhSdwKcgInCwyAqhCJVkBpSLhJF9AOIkHuNfxAFTZ1okA2zoMsEzCADjvhLAA6rwQBUCS/tlUoC/2L1BuZ/55eY25y2QAAAAASUVORK5CYII=",
	"lastName": "top_inner_upper_left.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_inner_upper_right.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVQ4T53RMQuAIBAF4LOkIRoiGoJoqCEa+v9/r3yhYimXpyBN77vzpYjoNLf4KJM8itNEGsBeCFQm9wCbEECmNtcDqwC4bPgFLJkAJmMqwi9gzgRcKAKmHwBr62BqBIwM4NZmgYEB/Fu5DfoEELXNAd0HSLbNAW0AuMKi38UBjQUQwnQUJgIQwMG3CEDTLigGbjYDBtFXPyaxAAAAAElFTkSuQmCC",
	"lastName": "top_inner_upper_right.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_open_down.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVQ4T2NkYGDQAeI/QPwPiP9CMYwNEgcBFiBmBmImKA1jszCOGjAaBsD0QSgdQNMRmCI5If1H1g1kgywjOiWCFGMDIENBLsGblNFtRjcIZDhOA3BYjFUY5B2UQCRFM0wt3AByNIP1AACo6VnRF3yI0QAAAABJRU5ErkJggg==",
	"lastName": "top_open_down.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_open_left.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVQ4T2NkYGDQAWKyASPUgD/kmoBswD9yDEE34C+phqAbAPIKSS7BZsB/oCFEuwSXAUS7hJABBGOH5gYQjBSaBCJF0Uh09MH8RtWkTDDAsCmAuYAszSBNABHTOiv6AtNXAAAAAElFTkSuQmCC",
	"lastName": "top_open_left.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_open_right.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVQ4T2NkYGDQAWKyASNQpwbZuhkYWEAGqJFpABNQH9gAZTIMYAbqgRugQKIBYI3IBsiRYADIZpCrUQyQJtIAmM0YBogTYQDcRmwuoNgAir1AcSBSHI0UJySKkzLFmYmi7AwA6SMC0Yb8I6AAAAAASUVORK5CYII=",
	"lastName": "top_open_right.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_open_up.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVQ4T2NkYGDQAWKyASPUgD9kmsCCbMA/Eg1hAqrHMOAvUPA/AYNAljIDMU4DQIaAFGEDIMNBmgkaAPIOuktAhoJsJdoAkEuQAcxWkgyAxQ4LkrNHDSAxFkZCIAIAxaJZ0ZKcsBkAAAAASUVORK5CYII=",
	"lastName": "top_open_up.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_outer_bottom_left.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVQ4T52SzQrCMBCEEygeiociCELpoR7Eg+//clo1s2SWsfY3hVAInW9nZxpDCDGd0idCXJWqk+4NwKEQ8Em6FwB1AWBIGhxzcNwJMKECmh0An5wBAxycNgIgxt54P9XBeQOAky04TmcGlxUA9wUEYkDgwO6xQrsA0MAg9vA0g24GQDFEtK0AA8JBPwFQAUS0PF7HANcRAB8tTWUb7uAmgL+eBcYKtQUL8Z4Bau/nb5PadIA7eOSQaJtdTwHZhDfyBQcLeCuosUumAAAAAElFTkSuQmCC",
	"lastName": "top_outer_bottom_left.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_outer_bottom_right.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArUlEQVQ4T52SCQ7DIAwESZv/PzlNBmWQcXOChDg9Xi9MpZTP1mm/rU/7PK7jvvM2EkD/7iMHNPaWAGTNWU5SLwpAiQoigKCsUtCSAXPIYlZHq+tUHAFUoppYit5wp5Z0BlCJfuiN66bqCmDdKskmVsgdwNcJr9u9xCMAkDPA3zNSO9IdCbZnH9qHif/gCnDkySsFKuuUPDHREgQYU//EKIBShzwgkKR6NeRBBMwrpR8ldhNpEz8AAAAASUVORK5CYII=",
	"lastName": "top_outer_bottom_right.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_outer_upper_left.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVQ4T52SywrCMBBFUxEX4kIEQRAXuigu/P+vs+qcMrdc46s1EPKcm5M705RSLtGv0W853m3dxVxd5z52TVw4R6f9LdCmAAMkkwlOEQQJjeDJAscMEghi8mSUB4eMdAp5Mkpgbx6A7ySjBHaVgEi0/TON28rEWgAqRD7WwSYFhM+IyDtPvOAQ7AtpbSYqje6DhD07Q5bYXNmLqPoXCJ5VNfJSyssvJiKmL4nuqU5YLPIVvygKEYnEfRo8mBsBUzfRA/iK+9FnR27XqJ4BP9NbeqQ8ALkMnSJCSrMLAAAAAElFTkSuQmCC",
	"lastName": "top_outer_upper_left.png"
}, {
	"fileName": "Images/AmbientOcclusion/top_outer_upper_right.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArUlEQVQ4T52SCw7DMAhD0627/5FX3OpFTgZROySUHzZgsrXWtvB3+Ct8n1bd47wrvsfpoAcHOwhiX53wzE4FPIhde8/kIPYRcgV5BZBRomfmTvHdqIAWPJPuPpZAbyIZrNJAYABUqPOPQTD36BVBluEHESkZ8Qa1U/Qkok/BJ1Nh+xS8DYnGCNOeKxHLOS/TJy0sBVtNAeCtsrOPpA8iLR6bf6THYAEg+P6FDtABM2gCdsMNX/EAAAAASUVORK5CYII=",
	"lastName": "top_outer_upper_right.png"
}, {
	"fileName": "Images/Textures/stone.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCElEQVQ4T4VTsRGEMAyLayjoKBiA1RiAnhGYjwEo6Cigzp98r5zwh/tUiS6RJdmxZVnyfd9JV9M0qes6h7ZtS+M4pvM8U+2egQAX+YBE+74XzmEYyh6Efd/7GYROcBxHatvWweu6yh5nPAYZVHGhGBRhOYECAEGIKopH+bgH0kIAQGU/QvkqiRjs2DzPnoFK1GrAqYi+aRUqbV1XJ4AnM0s5Zw+HwdGr+ufeFbALyh6lxmBV8SMD9ryWeiTl2QlqCbNKzT/b67Z1kNgF+seZ8nWYNBebpilzsphDHBqGHIMsIb5ZoNS3GfkZJA0qfh5aoTr+nb9tjA+U2BVwElkdlfB9o+84JyT+AHgnw0FDUcTDAAAAAElFTkSuQmCC",
	"lastName": "stone.png"
}, {
	"fileName": "Images/Textures/grass_green.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC10lEQVQ4TyWTS2sUQRzEq+e9M/vejdFESaIxCaKgQhRFMSDoRTz4BUTBi4+LN/HmwZMfzWswiDGJGE022ffs7rzb6nbZZZid6er6/6paPPpwTU77MSzXRDpNIQsgTwssbbbR+T5Ca7mMweEEwhBwfAtHOyMETRtuYCMaZxCPP16VUT+FV7NheyaGf2ewfRNCCEx7Cf+3YAgDfsOG5Vk43B7ApVC56YAPIJ5+viHzJMfweEZlDzKTsEsGqmd99H9PUF8o4eBrF5D8SokskRQH5teqcAIL4t6rNZlEKVorFRSpxODPlDuYMB0T3b0QpbpyZsGiqOUYiCc58jinIxe1BR/i/ut1mU45C1XBX04HXoV2bQOGJRCHGa0bSHgt1V095rgzQ3MpQG+fbLbebcg0LiBMwOKCJMrRWAxwsjvCyi2C3A0hc4nGko/Ozhi1RR/JJNPiaixx9+WqdAITjQtl9H+FKM95mDAVSIGMVjOKt1bKiMcpklmuTOr7o29DDV7cebFKNlLPmkwLuJxV2W4yPpPRTnsxvLKFk58h2lyoPnbJRHgSIzyNIJ58ui67e7RGIBF3icOUsJQjX8cYjVJUz5XQO5jA4yYqJa9qQ3VHgdYMTNeAy11m7EN5ztWlOv0xZqkKZJna0dDl8lgemqVbBxlZjTp08PD9Fd2DjMoJHViM0DApyGs8ZVw1vpzm7AyLNUjojIApXqMrKdiJrbcbMs+5EwG1L7ELJN47CDW8pc0Wc890levnAwiCPd0fo71cQZfvVOY9iNvPL8pSxdEtg8EoOVceFUjpKs8KLag6UjnjaVHLVs54ZnIgChOIZ19uyqPtIRdIclDwAoKiI96nnFMJ/K+witDQz1qXKzDZg9kghXjwZp0jSD13FmUkbKFUc/XpU+moq8kKK2iqI+q0WoSueKhWagbj4wguFyr7BckrMYcPVTrqyMYTnlampFypj6NAU1hN/Q+wnXcMSwrvpgAAAABJRU5ErkJggg==",
	"lastName": "grass_green.png"
}, {
	"fileName": "Images/Textures/grass_side.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB7klEQVQ4T21Sv0tbURT+XkwKMb62RiVRedLopINKdRICQhZRHDtUKhTXOhSaIo4OTv7AQbpV+j+0QgsKoouDBrMEHPxBA9VITV7Nw6QJ6SvflfO4SXuWe+493znn+865RvLLpOvz+VCr1VAsFkELBoOwbRumaSIcDqNcLsNxHIUhlvdCoQDLsmC8355yS6USeswoeBKQWcngyZsOVCoVlTTaN6jOrJNDPp9HKBRCtVqF3++HsbYz6x4tHSGxnsDhaQqBQAD25g0i7yzk1rLoXoiphDafqWL7C/v4M+NXLH9/LMJ4Ge9324YSuE3vKvrRZA+uV78rn/ZorgWVLQftb7vwc+MHnkVbcXldUDH6xof5STebs2FFnqKvM4xPX48RH4qBbzQB02cjM5dS2IP0xUOBxRdjLkFMokkxAsQIlGLi8z4+3Avj2/Ird+/k3AM/fj6Nu9RndSeAxrjuk4E0Ugx08NlV3mNCR+jqDOWdpzcDeZTKPCmNlFlE5AlViSkG+lD0wel6JbFRileAHRs1Uw6H+XpiROXLhuj/6o6rWf0jgUGuk4Mjswx6MYCHIYssWTNl1K1R9OtFvPU0OMK2TgIx1aZmBGr3dYNjJ8qgBM6FybItT4KASF0mLG/yF2T//12jXpVS5EM1rlC/s8FfURE20UrrUOIAAAAASUVORK5CYII=",
	"lastName": "grass_side.png"
}, {
	"fileName": "Images/Textures/dirt.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVQ4T22TvUpDQRCF5yI2gqI2MYigSWejxE4IWIqQ0i6FD+AL+AC+grXkFQTRTrA2qIWdP2ChaZKoYCNy9Vs5y+x6p9nZ2bkzc86ZW5wfdsv7l6Fhz4NxOLfWG5bHnl5HtrwwF98vrh9CXnGwu1ku1Wbt8uYxJnB/W2zb7WkvxFSQBvLJxwomoBpGl73tDdNd0/g7OZjyiqP9nfLOGtapj8OHfpocCm9+CvxQAIfHZn3ejs+urL22EvnwBT9qLZse9JMmgQPG4iMRqY9C4NdEnidS8BIOCM60OvbeP4ls44hx+YLCGSZQNc5cPk3jJySPeFBBHCgoPjg1spK1J1IMaJV7IKmEXVz4SaVYLCB5PGbgsDBojkkhfBYNrv5B4BE51YEdWbW/RRMsycykiYzC74v48augJBBI+JqYssnvz8iyugIDCP7fSFTw/4HYVyzXv1LGfO+1ULmE/k6DH3vMML8fk45xAAAAAElFTkSuQmCC",
	"lastName": "dirt.png"
}, {
	"fileName": "Images/Textures/cobblestone.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkklEQVQ4Tz1TO0+qQRScBV+AqAgBTXwUPhIotDDGQAgxNtigiTHQW/gXDIWtiT/Blt5YWVjYQA3GYBTlLYhIfJGoaETWzLnxnub79uzuOXNmZtXu7q6+v79Hp9PB2toavr6+cHl5iWazCa/XK+tcLodarYbn52f09fXBbrfLntlshtrf39fX19cIBoMwGo3IZrMolUpYWVlBPp+Hx+ORr1IKFxcX8l1eXpaiDLW1taUDgQBubm7Q3d0tyXQ6jUgkgoeHBzw9PUmup6cH5+fnGBgYELSLi4t4fHz8V4AHCOn29hZvb2+4u7uD2+2GwWCQC6+vr7i6upJ1KBTC6empFOWY6uDgQA8NDeHw8FCSfzE8PAyXyyVdiWxzc1MusDijUqnAarVCHR0d6WQyiY+PD/j9fkFgsVhwfHws/yzEcYrFIsrlMtiMiEgm12pnZ0cQECK5INufn5/o6upCtVr9j2h8fFzG+f7+hslkApu2222oaDSqScrPz49w0Gq1oLUWiRYWFjAxMSEEk3USOTg4KJ25LzKSREr4F5lMRg6vr6+j0WiI5gx6hfn5+XnhgtKzqRQgPM5E6ISZSCTgdDrR39+PpaUlKcAci52dncHhcIhvxAcbGxuaM83NzQmRZJ3EMXp7e6XbzMyMrLlns9mwuroqa6JQ4XBYk/X393chjkjoNHan81igUCjIRQZ9QKtzn9aWESgf2SWZ8Xgc09PTmJ2dFaeNjY1J/uTkRAoQOu3OYCEVi8U0O9frdXk4ZJjfl5cX4YGcUGbmaKKRkRHJUS1Kr7a3tzW78TAfDUfhSJSS5qF9yfbU1JS4j9JRHQYlVXt7ezqVSskBdqISrMyZOdrfqyOBo6Oj8Pl84geONDk5iV/8bXXNRkJGPQAAAABJRU5ErkJggg==",
	"lastName": "cobblestone.png"
}, {
	"fileName": "Images/Textures/planks_oak.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQ0lEQVQ4T31TPU8CQRDdTdAcJ9IIobKwMTGh0go7Sgs6KwsKO2v+gj+Aks4/YWJjYkdJZWJiY3EVOWhQyMUGeWPeZm5YmOZud77eezPrX0f362yWO22njaYci6Jw+c+347kUtDkgz6MAg98mX657eSZxSLTWrB3LPb5JkpQLWBQIgqHozfVFQIREmiB4uL0SBLA0PdzqyovV6rfkY6xQ2KUB7sGf/vfPWaCIakDjnx57giDmRCKpsL3VJohIIS1HJqIBtdBc/KDfEQSWo9VkrwZWuZfxh2ufN8L8sQ+0rSlQA10EwjFJcyYNLbpoEOuway90IxQXDcCPc9VcY3th/aUp6A2z84cmMK4xY/3z8G4NKLExcZFierBYQKA58/WxAIK5VHoKuA97gEO1cuDmi6WgO6kfyb/WAfyz6eZ5t/4fGnx/dZ7Ir2RMWmEAAAAASUVORK5CYII=",
	"lastName": "planks_oak.png"
}, {
	"fileName": "Images/Textures/sapling_oak.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlUlEQVQ4T2NkoBAwkqI/fK39/5XBB1H0YBgAUgQyFF0hSPzlow8MFw4/ZPiw7gNcH4YBavny/6UUBBgOFF5khBkG0gjiO/Tr/7e/xMXQOP84dgNAGjS2/GJYwPKA4ePb72CbQJpAtto8YGHg4+UC+3ib8Ce4K1BcAFJscOQ/w4L/j8AKQQYIBAn8z+fXZLh97ynDp8/fwOLG+qpwV2ANxIJgvf/8fNwMZy/eBiuGaT6i8AdsKCw8QN5CMQAksXPpRbCiMGvp/ywszAx/8xTBtsICFT0wMbwAMrU+0fL/168/wBrPWP5juH/tFThMQOGw5dwbsLdgMYHhBVA4mJxgYrhx+zE40FSVpBkmfrzO4PWWD2yglLgwAzc3B8MNHzawqzC8cGLHLQbds7/BNsG8BLIZBLirtRlgXgS5wsBWngFuALLfYDEAi0JQLIACFGQocsoFGQIXgCmGRR2I9jES+Q+KBZBzzx96wHBr4kMML+PNC+DA/PYDHB6wKETPOwQNgKUBdOfDDMJrAChBvXrzAZwCcRkAAH4i+X86onmwAAAAAElFTkSuQmCC",
	"lastName": "sapling_oak.png"
}, {
	"fileName": "Images/Textures/stone_slab_top.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVQ4T3VTu6qFMBCMhQ8QK8FCRBArOz/P0s7er/IPtBNELAQrEXwUHiaHzVnvNVuZTZzMzE6Mqqru4zgEL9u2heu6sjVNkwjDUGzbJt7OGQBIkkQ4jvMAocW6rsLzPLW3LIsC77pOSIAgCIRlWfLQeZ7qG2v8DBDTNBUILtv3XfR9/wXIskw2qEAXEugg+td1/WM4juMPALu4SVdcBp1pmkYYZVneaZo+KPLbQJ0YcSaQOs+zMOq6vuM4fkgAAN3IpQGAmy0Z0BR0Ot+MRQ/MHiaiiRH5vv/q+ps3wzB8GURR9OqdTj+Nt23bnwRooymQfqwpF3wK5IuUUBTFnee5YgAD/4YGm9xMMlKZqJNAVHUZeQSJMs+zzvNAUogdWCgT8Zh0Y+Q/kBQClgyQRD4CaMXzRSGBvPhzxpNHfQA9Utb3jY1VcQAAAABJRU5ErkJggg==",
	"lastName": "stone_slab_top.png"
}, {
	"fileName": "Images/Textures/stone_slab_side.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVQ4T3VSzcqDQAyMFH/A+gK+vhdfowfBi8dSQbRFBUXwpIJVxO+bLbFRak6b7G4yMxktDMN1WRaScblcSNd1Ver7nq7XK83zTMd3RVGQhgav14ssy9o14aTrOnIcZ7tr25Zs21Z5HMefBvf7nQzDUMVpmrYzcnxGE0aEGoaN40jP5/PToK5rVeAYhkFN4Yeog8IxyrL8NsAlJp2FpMFv/oeTFgTBmmXZDqKcBuiMSCIB1aZpSIuiaIWakgIa8ERZZ/47BL7vrxAD8X6/fzJAk+OWTNNUb5WIx53jA7zAITcgJ2w+SJLk5+Qz/rzex+OxNxJvgfkjZ1/ILbAuyge3222tqmpDAAGPpsGlFJP1UGuEBmcUGOqZR3ZGYs9Lr0s/MBVGBxR5nn81OLOr/MBUuLFC4HnemqbppgG4uq6rcjhQhvQJ++APXfwBw51HpGoAAAAASUVORK5CYII=",
	"lastName": "stone_slab_side.png"
}, {
	"fileName": "Images/Textures/stonebrick.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuUlEQVQ4T2WTuYoCQRCGq70v8DWMTYwMfQzB1EcwMjURBAUTwecxNTYSFC+876t3v4ZqZmcrcZz+q+o/esxwOLSPx0NSqZS83285n8+Sy+Xk9XrJ5/ORYCUSCTmdThKJRMRaK+PxWMxgMLCbzcbjDoeD5PN5/3+9XruB1PP5FIZQLJvP52I6nY5dLpe+gWaGKJCDdDott9vNY2B5v9/leDyK6ff7djKZuC1BINvCpUPBsZ1Fptfr2dls9g8clKGHKocByIa56Xa7lmlabFEjVbf+wlKZsR1Zpt1uOwY0YkyYetC0y+UiyWTSJfb9fmW324mpVqv2H//AC4DEFovFxBjjGili5Nl5EI1GfUs8HveRjUYjqVQqwj0BjOvZbNYNU5mm0Wg4BmHt+/1ettutlEolB9YYwxJNq9VyAzBFLwoJ0LxardyAxWLxRyUpgKdMs9n0HnBAsQ2DAJXLZRcZEVJ6KzUZL4EXmj2NSIA6DDSlYKxKyTMIauP5er2661osFoX4lJnSZxmsTL1e9xJIgLuQyWSc03hQKBRkOp069/lCOad4dh7UajU3gFyDpXk70G/+DOSd5q/YH35oQSbAnthpAAAAAElFTkSuQmCC",
	"lastName": "stonebrick.png"
}, {
	"fileName": "Images/Menu/inventory.png",
	"reply": "data:image/png;base64,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",
	"lastName": "inventory.png"
}, {
	"fileName": "Images/Menu/gui.png",
	"reply": "data:image/png;base64,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",
	"lastName": "gui.png"
}, {
	"fileName": "Images/Menu/selection.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAClklEQVRIS7VW204TURRd03JpiSkJ78bE+KzxLzTxZfwFH/wSn0yMhgQlgWKRi6K22mpJC73TlpYWKFAuD5pI1CiSkIb0SmGcdSaH2sCT0+6kaWfPOWetvffZe1UBoOmfrpnS09PjPjk5Uc/OzlCv16FYFfysfsM1xw3sHWwJYPr7+vqgKAp6e3uhrxd+q9WK09NT1Go12Gy2NpK5bB4P7j/0CAB9gTrtd50vaDQa4kBpmqbB4XDg8PAQ/f39ODo6wtDQkDiYzyTAb5rdbke1WkUoGMbMizcGwHH5WJ0LzCAaikFGwg0EImMylyZZ08dI9P1ij8ViEUvu3rsjogrOL2D6+WsDgCma9DkRXojANTzVOu0/KlP4ntPWVwvirHMA3anuFHfh+/DJNMB++YsWCUWRjKfgfOoyIiAAi9KJCIq/1jWetRRLYuLZZPcA2lKU2ouJFHUyggs16GSKtjaK8PvmW0Xe+JFXNwtbwmn2Fu3+2dQy6Sw+e/1wv/zY+Rp8Le1pidgS0kvLGHsyYQBs/y6o6eSybA5TfSBvUcAfxNzY+1YEq7k1eD0+vB13dwSgrch63tRkIoVUIo3Rx2OdB5CNlsvkMfxoxDQA070YCOGd02OkiBHEInHZfaYBeOUji1FMjcwaALLROIt0VFMAa/tZrbi5jVg43hoVulONRxNiQOkz3BTAzsGGll1euThN6aRI6GGZAqg1atqs/5VoWo/La6SInbySyeHW7ZtCBqV48DfVic8UFgoJfZcZhenqleviFcXr0lnElwMDA0ISqbGUShqlkRJZqVTQbDYFmDQJKr+pblQ7FvlccMbdoyoRaWRCK5fLgq1kTAnlRoL9ayRBMtTlwcFBlEolETWJilukL+7q35a/AIEAMUjPoXQAAAAASUVORK5CYII=",
	"lastName": "selection.png"
}, {
	"fileName": "Images/crosshair.png",
	"reply": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAASklEQVQ4T2NkoCJgpKJZDPQ37D8QMAIBIV8QVAAyYNQwlGCkXZiBAppQjKHLI8cy7VyGy1WjSYNOSYPUZIGRTCg1AFk/UemMWAsBPAg0FDIa5KMAAAAASUVORK5CYII="
}];

function _getDataByFilename(fileName) {
	let data;
	fakeImageData.some(function(imageData) {
		if (imageData.fileName === fileName) {
			data = imageData;
			return true;
		}
		return false;
	});
	return data;
}

function FakeImage(real) {
	let listeners = {
		load: [],
		error: []
	};
	["onload", "onerror"].forEach(property=>{
		Object.defineProperty(this, property, {
			get: ()=>{
				return;
			}
			,
			set: (func)=>{
				if (typeof func === "function")
					listeners[property.substr(2)].push(func)
			}
		});
	}
	);
	Object.defineProperty(this, "src", {
		get: function() {
			return real.src;
		},
		set: function(value) {
			let data = _getDataByFilename(value);
			if (data) {
				//this.fileName = data.lastName;
				var img = document.createElement("_img");
				img.onload = ()=>{
					listeners.load.forEach(f=>f.call(this, this.simulateEvent(data, img)));
				}
				img.src = data.reply;
			} else {
				console.warn('Filename "' + value + '" has no reply');
				var img = document.createElement("_img");
				img.onload = (ev)=>{
					var str = ev.target.src.split('').reverse().join('');
					str = str.substr(0, str.indexOf('/')).split('').reverse().join('');
					console.log('"' + str + '"', "Loaded");
					if (!this._ctx) {
						this._ctx = this.getContext("2d");
					}
					this.width = img.width;
					this.height = img.height;
					this._ctx.drawImage(img, 0, 0);
					fakeImageData.push({
						fileName: value,
						reply: this.toDataURL()
					});

					Object.defineProperty(ev, "target", {
						get: ()=>{
							return this;
						}
					});
					listeners.load.forEach(f=>f.call(this, ev));
				}
				img.onerror = function(ev) {
					console.log("Image Error: ", ev);
				}
				img.src = value;
			}
		}
	});
	this.simulateEvent = function(data, realImage) {
		if (!this._ctx) {
			this._ctx = this.getContext("2d");
		}
		this.width = realImage.width;
		this.height = realImage.height;
		this._ctx.drawImage(realImage, 0, 0);
		var obj = {
			target: this,
			currentImage: this,
			type: "load",
			timeStamp: performance.now()
		}
		return obj;
	}
}

function initFakeImage() {
	fakeImageData.forEach(data=>{
		if (!data.lastName) {
			var str = data.fileName.split('').reverse().join('');
			str = str.substr(0, str.indexOf('/')).split('').reverse().join('');
			data.lastName = str;
		}
	}
	)
	var realFunction = document.createElement;
	document.createElement = function(a, b, c) {
		if (a === "_img")
			return realFunction.call(document, "img");
		else if (a === "img") {
			let fakeImage = realFunction.call(document, "canvas");
			FakeImage.call(fakeImage);
			return fakeImage;
		} else
			return realFunction.call(document, a);

	}
}

if (location.hostname == "") {
	initFakeImage();
}

function showFakeImageData() {
	console.log(JSON.stringify(fakeImageData));
}
