import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
//转而使用服务删除导入HEROES语句
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  //注入HeroService
  //这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
  constructor(private heroService: HeroService) {
  }

  //在 ngOnInit 生命周期钩子中调用 getHeroes()，之后 Angular 会在构造出 HeroesComponent 的实例之后的某个合适的时机调用 ngOnInit()
  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    //Observable:这可能立即发生，也可能会在几分钟之后。 然后，subscribe() 方法把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性。
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
