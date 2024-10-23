export class MenuModel{
    label:string;
    icon?:string;
    items:MenuModelItem[];
    separator?:boolean;

    constructor(
        label:string,
        items:MenuModelItem[],
        icon:string,
        separator?:boolean,
    ){
        this.label=label;
        this.items=items;
        this.icon=icon;
        this.separator=separator;
    }
}

export class MenuModelItem{
    label:string;
    icon:string;
    items?:MenuModelItem[];
    routerLink?:string[];
    routerLinkActiveOptions?:any;
    url?:string[];
    badge?:string;
    target?:string;

    constructor(
        label:string,
        icon:string,
        items?:MenuModelItem[],
        routerLink?:string[],
        routerLinkActiveOptions?:any,
        url?:string[],
        badge?:string,
        target?:string
    ){
        this.label=label;
        this.icon=icon;
        this.items=items;
        this.routerLink=routerLink;
        this.routerLinkActiveOptions=routerLinkActiveOptions;
        this.badge=badge;
        this.url=url;
        this.target=target;
    }

}