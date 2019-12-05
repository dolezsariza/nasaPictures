import { NasaService } from "./../nasa.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NasaPic, PicRequest } from "../nasa-pic";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  picForm: FormGroup;
  photos;
  choosenRoverName;
  earthDate;

  roverName = ["Curiosity", "Opportunity", "Spirit"];

  constructor(
    private formBuilder: FormBuilder,
    private nasaService: NasaService
  ) {
    this.picForm = this.createFormGroup(formBuilder);
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      nasaPic: formBuilder.group(new NasaPic())
    });
  }

  ngOnInit() {}

  onSubmit() {
    const result: PicRequest = Object.assign({}, this.picForm.value);
    result.nasaPic = Object.assign({}, result.nasaPic);

    let url = this.nasaService.getUrl(result);
    this.nasaService.getPhotos(url).subscribe(data => {
      this.photos = data["photos"];
    });
    this.choosenRoverName = result.nasaPic.roverName;
    this.earthDate =
      result.nasaPic.year +
      "-" +
      result.nasaPic.month +
      "-" +
      result.nasaPic.day;
  }

  revert() {
    this.picForm.reset({ nasaPic: new NasaPic() });
  }
}
