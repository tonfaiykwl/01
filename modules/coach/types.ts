export type BallKind = "cue"|"red"|"yellow"|"green"|"brown"|"blue"|"pink"|"black"|"blocker";
export type Difficulty = 1|2|3|4|5|6|7|8|9|10;
export type DrillType = "safety"|"escape"|"thin-contact"|"position";
export interface Point { x:number; y:number }
export interface Ball { id:string; kind:BallKind; x:number; y:number }
export interface TableSpec { width:number; height:number; ballRadius:number }
export interface ShotPath { points:[number,number][]; bounces:[number,number][]; distance:number; angle:number; collisionFree:boolean; score:number }
export const defaultTable:TableSpec={width:1,height:.6,ballRadius:.022};