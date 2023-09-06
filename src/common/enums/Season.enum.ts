import { registerEnumType } from "@nestjs/graphql";

export enum Season {
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Autumn = 'AUTUMN',
  Winter = 'WINTER',
}

registerEnumType(Season, {
  name: 'Season'
})