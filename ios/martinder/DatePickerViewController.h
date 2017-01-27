//
//  DatePickerViewController.h
//  martinder
//
//  Created by Ricardo Pereira on 27/01/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DatePickerViewController : UIViewController

@property (weak, nonatomic) IBOutlet UIDatePicker *datePicker;
@property (weak, nonatomic) IBOutlet UIButton *acceptButton;
@property (weak, nonatomic) IBOutlet UIButton *cancelButton;

@end
