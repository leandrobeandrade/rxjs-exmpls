import { Component, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js'
import { environment } from 'src/env/environment';
import { NewModel } from './model/new.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;
  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  new: NewModel = new NewModel();
  
  ngOnInit(): void {
    console.log(this.supabase);
    this.getMainNew();
  }

  async getMainNew() {
    const news$: any = await this.supabase.from('news').select('*');
    console.log('### ', news$?.data);

    news$.data?.map((new_: NewModel) => {
      console.log(new_);
      this.new.title = new_.title;
      this.new.image = new_.image;
    })

    // console.log('$$$ ', this.new.title);
    
  }
}
