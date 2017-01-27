//
//  DatePickerViewController.m
//  martinder
//
//  Created by Ricardo Pereira on 27/01/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "DatePickerViewController.h"

@interface DatePickerViewController ()

@property (strong, nonatomic) IBOutlet UITapGestureRecognizer *tapGesture;

@end

@implementation DatePickerViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.view.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:0.8];
  UIColor *colorBrand = [UIColor colorWithRed:0.33 green:0.07 blue:0.71 alpha:1.0];
  UIColor *colorBrandSecondary = [UIColor colorWithRed:0.43 green:0.99 blue:0.69 alpha:1.0];
  self.acceptButton.backgroundColor = colorBrand;
  self.acceptButton.tintColor = [UIColor whiteColor];
  self.acceptButton.layer.cornerRadius = 6.0;
  self.cancelButton.backgroundColor = [UIColor clearColor];
  self.cancelButton.tintColor = colorBrandSecondary;
  self.cancelButton.layer.cornerRadius = 6.0;
  self.cancelButton.layer.borderWidth = 2.5;
  self.cancelButton.layer.borderColor = colorBrandSecondary.CGColor;
  self.datePicker.backgroundColor = [UIColor whiteColor];
  self.datePicker.layer.cornerRadius = 6.0;
  self.datePicker.layer.masksToBounds = true;
  [self.tapGesture addTarget:self action:@selector(didTouchView:)];
}

- (IBAction)didDateChanged:(id)sender {
    
}

- (IBAction)didTouchAccept:(id)sender {

}

- (IBAction)didTouchCancel:(id)sender {

}

- (IBAction)didTouchView:(id)sender {
    [self dismissViewControllerAnimated:true completion:nil];
}

@end
