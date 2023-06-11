export default class Movie {
  constructor(
    public id: number,
    public year: number,
    public country: string,
    public slogan: string,
    public genre: string,
    public duration: number,
    public cost: number
  ) {}
}
