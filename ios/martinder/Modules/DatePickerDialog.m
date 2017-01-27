//
//  DatePickerDialog.m
//  martinder
//
//  Created by Ricardo Pereira on 27/01/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "DatePickerDialog.h"
#import <React/RCTLog.h>
#import "DatePickerViewController.h"

@implementation DatePickerDialog

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showPicker:(NSString *)title) {
  dispatch_async(dispatch_get_main_queue(), ^{
    DatePickerViewController *datePickerViewController = [[DatePickerViewController alloc] initWithNibName:nil bundle:nil];
    datePickerViewController.modalTransitionStyle = UIModalTransitionStyleCrossDissolve;
    datePickerViewController.modalPresentationStyle = UIModalPresentationOverFullScreen;
    UIViewController *rootViewController = [[[UIApplication sharedApplication].delegate window] rootViewController];
    [rootViewController presentViewController:datePickerViewController animated:true completion:nil];
  });
  RCTLogInfo(@"Showing date picker");
}

@end
